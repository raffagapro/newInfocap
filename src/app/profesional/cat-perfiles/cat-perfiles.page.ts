import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSelect, LoadingController, MenuController, ModalController, Platform, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core'
import { Subscription } from 'rxjs';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { EmptyModalComponent } from './empty-modal/empty-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { IMAGE_URL_BLANK } from 'src/shared/constants';

import axios from 'axios';
import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';

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
  imageBlank = IMAGE_URL_BLANK;
  categories = [];
  profCategories = [];
  grabbedUser: User = null;
  userSub: Subscription;
  imgListSub: Subscription;
  form: FormGroup;
  headers: String;
  selectedCatId;
  selectedProPerfil;
  selectedProPerfilID;
  comunas = [];
  proCategoryImgSave = [];
  comunasBU = [];
  transports = [];
  selectedTransport;
  selectedComunas = [];
  selectedDays = [];
  @Output() imgPick = new EventEmitter<string | File>();
  selectedImage: string;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  useInputPicker = false;
  profilePhoto = true;
  searchValue: string;

  proCategoryProfile = {
    communes: null,
    category_id: null,
    transports: null
  };

  proCategoryImg: Object[]
  hideList = true;
  @ViewChild('categoryList') categorySelect: IonSelect;

  constructor(
    private lc: LoadingController,
    private us: UserService,
    private modalController: ModalController,
    private platform: Platform,
    private menuController: MenuController,
    private pickerController: PickerController
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });
    //api headers

    //categories list
    axios.get(API + '/supplier/categories', { headers: { Authorization: this.headers } }).then(async resData => {
      this.categories = resData.data.data;
    })

    //form
    this.form = new FormGroup({
      descProf: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      workHours: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      workDays: new FormControl(null, {
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
  }

  async showPicker() {
    let options: PickerOptions = {
      mode: 'ios',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel'
        },
        {
          text:'Listo',
          handler:(value:any) => {
            this.selectedProPerfil = value.category.text
            this.selectedProPerfilID = value.category.value
            this.onCatProfileChange(value.category.value)
          }
        }
      ],
      columns:[{
        name:'category',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getUrl() {
    if(!this.grabbedUser.img_profile || this.grabbedUser.img_profile === '') {
      return "url('assets/images/avatar.png')"
    } else {
      return `url(${this.grabbedUser.img_profile})`
    }
  }

  getColumnOptions(){
    let options = [];
    console.log()
    this.profCategories.forEach(x => {
      options.push({text: x.categoryName, value: x.id});
    });
    return options;
  }

  ionViewWillEnter() {
    //prof categories list
    axios.get(API + '/supplier/professions', { headers: { Authorization: this.headers } }).then(resData => {
      if (resData.data.code === 200) {
        if (resData.data.data.length === 0) {
          this.modalController.create({
            component: EmptyModalComponent,
            cssClass: 'modalServRechazado',
          }).then(modalEl => {
            modalEl.present();
          });
        } else {
          this.profCategories = resData.data.data;
          this.proCategoryProfile =  resData.data.data[0];
          this.proCategoryImg = resData.data.data[0].images
          this.selectedProPerfil = this.profCategories[0].categoryName;
          this.selectedCatId = this.profCategories[0].category_id
          this.selectedProPerfilID = this.profCategories[0].id
          this.onCatProfileChange(this.selectedProPerfilID)
          this.updateForm(this.profCategories[0]);
        }
      }
    }).catch(err => {
      console.log(err)
    })
    this.menuController.enable(true, 'profesional');
  }

  onCatProfileChange(profileID) {
    this.lc.create({
      message: 'Cargando informacion...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.get(API + `/supplier/profession/${profileID}`, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        this.updateForm(resData.data.data)
        this.proCategoryProfile =  resData.data.data;
        this.proCategoryImg = resData.data.data.images
      }).catch(err => {
        loadingEl.dismiss();
      })
    });
  }

  openMenu() {
    this.menuController.open();
  }

  updateForm(info) {
    this.selectedCatId = info.category_id;
    this.selectedTransport = info.transport_id;
    this.selectedComunas = info.communes;
    let descPro;

    if (info.descProf === 'empty' || info.descProf === 'ND') {
      descPro = null;
    } else {
      descPro = info.descProf;
    }
    let descOff;
    if (info.description === 'empty' || info.descProf === 'ND') {
      descOff = null;
    } else {
      descOff = info.description;
    }

    let daysWork;
    if(info.work_days === '0') {
      daysWork = null
    } else {
      daysWork = info.work_days
    }

    let hoursWork;
    if(info.hours === '0') {
      hoursWork = null
    } else {
      hoursWork = info.hours
    }

    //pasing values to from
    this.form.patchValue({
      descProf: descPro,
      transport: info.transport_id,
      workHours: hoursWork,
      workDays: daysWork,
      comuna: info.commune_id,
      descOffice: descOff
    })
  }

  onTransportChange(e) {
    this.selectedTransport = +e.detail.value;
  }

  onSearchChange(e) {
    if (e.srcElement.value === '') {
      return
    }
    this.comunas = this.comunasBU;
    const searchTerm = e.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.comunas = this.comunas.filter(currentComuna => {
      if (currentComuna.name && searchTerm) {
        return (currentComuna.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  selectComuna(comunaID: string) {
    let go = true;
    this.selectedComunas.forEach(c => {
      if (c.id === +comunaID) {
        go = false;
        return
      }
    });
    if (go) {
      this.comunasBU.forEach(c => {
        if (c.id === +comunaID) {
          this.selectedComunas.push(c);
        }
      });
    }
    this.searchValue = "";
    this.comunas = [];
  }

  onRemoveComuna(comunaID: string) {
    for (var i = 0; i < this.selectedComunas.length; i++) {
      if (this.selectedComunas[i].id === +comunaID) {
        this.selectedComunas.splice(i, 1);
      }
    }
  }

  onDaysChange(e) {
    this.selectedDays = e.detail.value;
  }

  onUpdateCatProfile() {
    let aComunas = [];
    let packedComunas;
    this.proCategoryProfile.communes.forEach(c => {
      aComunas.push(c.id);
    });
    packedComunas = aComunas.join(", ");

    var formData = new FormData()
    this.proCategoryImgSave.forEach(image => {
      formData.append('images[]', image);
    });
    formData.append('category_id', this.selectedCatId);
    formData.append('communes', packedComunas)
    formData.append('transport_id', this.selectedTransport)
    formData.append('descProf', this.form.value.descProf)
    formData.append('description', this.form.value.descOffice)
    formData.append('hours', this.form.value.workHours)
    formData.append('work_days', this.form.value.workDays)

    this.lc.create({
      message: 'Actualizando la informacion...'
    }).then(loadingEl => {
      loadingEl.present();
      axios.post(API + `/supplier/profession/${this.selectedProPerfilID}`, formData, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss();
        console.log('Enter')
        this.modalController.create({
          component: SuccessModalComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        });
      }).catch(err => {
        loadingEl.dismiss();
      })
    });

  }

  onLoadImg(profile: boolean) {
    this.profilePhoto = profile;
    if (!Capacitor.isPluginAvailable('Camera') || this.useInputPicker) {
      this.hiddenImgInputRef.nativeElement.click();
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 500,
      width: 500,
      resultType: CameraResultType.DataUrl,
      promptLabelPhoto: 'Fotos',
      promptLabelPicture: 'Cámara',
      promptLabelCancel: 'Cancelar'
    }).then(image => {
      this.saveImgToApi(image.dataUrl);
    }).catch(e => {
      console.log(e);
    });
  }

  async openImage(image: string) {
    const successModal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        image,
      },
      cssClass: 'modalImage',
    });
    successModal.present();
  }

  removeImage(imageIndex: number) {
    // this.loadedImages = this.loadedImages.filter((image: any, index: number) => index !== imageIndex)
    this.proCategoryImg = this.proCategoryImg.filter((image: any, index: number) => index !== imageIndex)
  }

  onLoadImgFromInput(e: Event) {
    const loadedFile = (e.target as HTMLInputElement).files[0];
    this.saveImgToApi(loadedFile);
    //save img to api
  }

  saveImgToApi(imageData: string | File) {
    let imgFile;
    if (typeof imageData === 'string') {
      try {
        imgFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
      } catch (e) {
        console.log(e);
        return;
      }
    } else {
      imgFile = imageData;
    }

    this.proCategoryImg.unshift({image: URL.createObjectURL(imgFile)})
    this.proCategoryImgSave.push(imgFile);

    this.form.patchValue({ image: imgFile });
    // this.lc.create({
    //   message: 'Guardando imagen...'
    // }).then(loadingEl => {
    //   loadingEl.present();
    //   //check to see if we are loading a profile img
    //   if (this.profilePhoto) {
    //     const formData = new FormData();
    //     formData.append('image', imgFile);
    //     axios.post(API + '/account/image', formData, { headers: { Authorization: this.headers } }).then(resData => {
    //       loadingEl.dismiss();
    //       this.modalController.create({
    //         component: SuccessModalComponent,
    //         cssClass: 'modalSuccess',
    //       }).then(modalEl => {
    //         modalEl.present();
    //       });
    //     }).catch(err => {
    //       console.log(err)
    //       loadingEl.dismiss();
    //     })
    //   } else {
    //     const formData = new FormData();
    //     console.log(this.selectedCatId)
    //     formData.append('images[]', imgFile);
    //     formData.append('category_id', this.proCategoryProfile.category_id);
    //     formData.append('transport_id', this.proCategoryProfile.transports);
    //     axios.post(API + `/supplier/profession/${this.selectedProPerfil}`, formData, { headers: { Authorization: this.headers } }).then(resData => {
    //       loadingEl.dismiss();
    //     }).catch(err => {
    //       loadingEl.dismiss();
    //     })
    //   }
    // });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
