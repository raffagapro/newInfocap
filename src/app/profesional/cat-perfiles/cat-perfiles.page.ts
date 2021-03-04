import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';


import { ProfCategory } from 'src/app/model/profCategory.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ImgListService } from 'src/app/services/img-list.service';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-cat-perfiles',
  templateUrl: './cat-perfiles.page.html',
  styleUrls: ['./cat-perfiles.page.scss'],
})
export class CatPerfilesPage implements OnInit, OnDestroy {
  categories = [];
  profCategories = [];
  grabbedUser: User = null;
  userSub: Subscription;
  loadedImgList: string[]= [];
  imgListSub: Subscription;
  form: FormGroup;
  headers: HttpHeaders;
  selectedCatId;
  selectedProPerfil;
  comunas = [];
  transports = [];
  selectedTransport;
  selectedComuna;
  selectedDays = [];
  @Output() imgPick = new EventEmitter<string | File>();
  selectedImage: string;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  useInputPicker = false;
  profilePhoto = true;

  constructor(
    private lc: LoadingController,
    private us: UserService,
    private http: HttpClient,
    private modalController: ModalController,
    private platform: Platform,
    private ils: ImgListService,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    //api headers
    this.headers = new HttpHeaders().set('Authorization', 'Bearer '+this.grabbedUser.access_token);
    
    // this.headers.append('Content-Type', 'multipart/form-data');
    
    //categories list
    this.http.get(API+'/supplier/categories', {headers: this.headers})
    .subscribe(resData =>{
      this.categories = resData['data'];
    });

    //comunas
    this.http.get(API+'/location/communes', {headers: this.headers})
    .subscribe(resData =>{
      this.comunas = resData['data'];
    });

    //transports
    this.http.get(API+'/transports', {headers: this.headers})
    .subscribe(resData =>{
      this.transports = resData['data'];
    });

    //form
    this.form = new FormGroup({
      descProf: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      transport: new FormControl(null, {
        updateOn: 'blur'
      }),
      sHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      eHour: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      workDays: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      comuna: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      descOffice: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(null),
    });
    //platfrom checker
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.useInputPicker = true;
    }
    //loading imgList
    this.loadedImgList = this.ils.imgList;
    this.imgListSub = this.ils.listChanged.subscribe(imgList =>{
      this.loadedImgList = imgList;
    });
  }

  ionViewWillEnter(){
    //prof categories list
    this.http.get(API+'/supplier/professions', {headers: this.headers})
    .subscribe(resData => {
      console.log(resData['data']);
      if (resData['code'] === 200) {
        if (resData['data'].length === 0) {
          //lunch awesome modal
          this.modalController.create({
            component: EmptyModalComponent,
            cssClass: 'modalServRechazado',
          }).then(modalEl =>{
            modalEl.present();
          });
        }else{          
          this.profCategories = resData['data'];
          this.selectedProPerfil = this.profCategories[0].id;
          this.updateForm(this.profCategories[0]);
        }
      }
    }, e =>{
      console.log(e);
    });
  }

  onCatProfileChange(profileID){
    // console.log(e.detail.value);
    this.lc.create({
      message: 'Cargando informacion...'
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.get(API+`/supplier/profession/${profileID}`, {headers: this.headers})
      .subscribe(resData =>{
        console.log(resData['data']);
        loadingEl.dismiss();
        this.selectedProPerfil = profileID;
        this.updateForm(resData['data'])
        //loading images
        this.ils.setImgList(resData['data'].images);
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
  }

  updateForm(info){
    this.selectedCatId = info.category_id;
    // console.log(info);
    this.selectedTransport = info.transport_id;
    this.selectedComuna = +info.commune_id;
    let descPro;
    if (info.descProf === 'empty') {
      descPro = null;
    }else{
      descPro = info.descProf;
    }
    let descOff;
    if (info.description === 'empty') {
      descOff = null;
    }else{
      descOff = info.description;
    }
    let sHour;
    let eHour;
    if (info.hours === 'empty') {
      sHour = null;
      eHour = null;
    }else{
      let tempHours = info.hours.split('/');
      sHour = tempHours[0];
      eHour = tempHours[1];
    }
    let wDays;
    let zDays = [];
    if (info.work_days === 'empty') {
      wDays = null;
    }else{
      wDays = info.work_days;
      let tempDays = info.work_days.split('-');
      tempDays.forEach(i => {
        zDays.push(i);
      });
      this.selectedDays = zDays;
    }
    //pasing values to from
    this.form.patchValue({
      descProf: descPro,
      transport: info.transport_id,
      sHour: sHour,
      eHour: eHour,
      workDays: zDays,
      comuna: +info.commune_id,
      descOffice: descOff
    })
  }

  onTransportChange(e){
    this.selectedTransport = +e.detail.value; 
  }

  onComunaChange(e){
    this.selectedComuna = +e.detail.value; 
  }

  onDaysChange(e){
    // console.log(e.detail.value);
    this.selectedDays = e.detail.value; 
  }

  onUpdateCatProfile(){
    // console.log(this.form);
    let strDays = this.selectedDays.join('-');
    // console.log(strDays);
    const body = {
      category_id: this.selectedCatId.toString(),
      commune_id: this.selectedComuna.toString(),
      transport_id: this.selectedTransport.toString(),
      descProf: this.form.value.descProf,
      description: this.form.value.descOffice,
      hours: this.form.value.sHour+'/'+this.form.value.eHour,
      work_days: strDays,
    }
    // console.log(body);
    this.lc.create({
      message: 'Actualizando la informacion...'
    }).then(loadingEl =>{
      loadingEl.present();
      this.http.post(API+`/supplier/profession/${this.selectedProPerfil}`, body, {headers: this.headers})
      .subscribe(resData =>{
        loadingEl.dismiss();
        this.modalController.create({
          component: SuccessModalComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl =>{
          modalEl.present();
        });
      }, err =>{
        console.log(err);
        loadingEl.dismiss();
      });
    });
    
  }

  onLoadImg(profile: boolean){
    this.profilePhoto = profile;
    if (!Capacitor.isPluginAvailable('Camera') || this.useInputPicker) {
      this.hiddenImgInputRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 25,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 150,
      // width: 200,
      resultType: CameraResultType.DataUrl,
    }).then(image =>{
      // console.log(image);
      
      // this.selectedImage = image.dataUrl;
      // this.imgPick.emit(image.dataUrl);

      // console.log(this.selectedImage);
      //save img to api
      this.saveImgToApi(image.dataUrl);
      
    }).catch(e =>{
      console.log(e);
    });
  }

  onLoadImgFromInput(e: Event){
    const loadedFile = (e.target as HTMLInputElement).files[0];
    // console.log(loadedFile);
    this.saveImgToApi(loadedFile);
    //save img to api
  }

  saveImgToApi(imageData: string | File){
    let imgFile;
    if (typeof imageData === 'string') {
      try {
        imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
      } catch (e) {
        console.log(e);
        return;
      }
    }else{
      imgFile = imageData;
    }
    this.form.patchValue({image: imgFile});
    this.lc.create({
      message: 'Guardando imagen...'
    }).then(loadingEl =>{
      loadingEl.present();
      //check to see if we are loading a profile img
      if (this.profilePhoto) {
        const formData = new FormData();
        formData.append('image', imgFile);
        this.http.post(API+'/account/image', formData, {headers: this.headers})
        .subscribe(resData =>{
          // console.log(resData);
          this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
          loadingEl.dismiss();
          this.modalController.create({
            component: SuccessModalComponent,
            cssClass: 'modalSuccess',
          }).then(modalEl =>{
            modalEl.present();
          });
        }, err =>{
          loadingEl.dismiss();
          console.log(err);
        });
        //if we are not loading a profile img
      } else {
        // const body = {
        //   images:[imgFile]
        // }
        let strDays = this.selectedDays.join('-');
        const formData = new FormData();
        formData.append('images[]', imgFile);
        formData.append('category_id', this.selectedCatId.toString());
        formData.append('transport_id', this.selectedTransport.toString());
        formData.append('commune_id', this.selectedComuna.toString());
        this.http.post(API+`/supplier/profession/${this.selectedProPerfil}`, formData, {headers: this.headers})
        .subscribe(resData =>{
          // console.log(resData);
          loadingEl.dismiss();
          //remove when getting from resData
          this.onCatProfileChange(this.selectedProPerfil);
          //activate when getting it from resdata
          // this.ils.setImgList(resData['data'].images);
        }, err =>{
          console.log(err);
          loadingEl.dismiss();
        });
      }
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    this.imgListSub.unsubscribe();
  }

}
