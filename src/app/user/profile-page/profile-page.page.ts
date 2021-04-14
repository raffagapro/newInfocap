import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';
import { IMAGE_URL_BLANK } from 'src/shared/constants';
import { SuccessModalComponent } from './success-modal/success-modal.component';

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
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit, OnDestroy {
  grabbedUser: User;
  headers: HttpHeaders;
  userSub: Subscription;
  form: FormGroup;
  httpError: string;
  passError: string;
  @Output() imgPick = new EventEmitter<string | File>();
  selectedImage: string;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  useInputPicker = false;

  constructor(
    private us: UserService,
    private lc: LoadingController,
    private http: HttpClient,
    private modalController: ModalController,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
    //api headers
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
    // updates to the most current info from DB
    this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
    let phone1: string;
    let phone2: string;
    if (this.grabbedUser.phone1 === '-') {
      phone1 = null;
    } else {
      phone1 = this.grabbedUser.phone1;
    }
    if (this.grabbedUser.phone2 === '-') {
      phone2 = null;
    } else {
      phone2 = this.grabbedUser.phone2;
    }
    this.form = new FormGroup({
      name: new FormControl(this.grabbedUser.name + ' ' + this.grabbedUser.last_name, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(this.grabbedUser.email, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      phone1: new FormControl(phone1, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phone2: new FormControl(phone2, {
        updateOn: 'blur',
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
      }),
      newPassword: new FormControl(null, {
        updateOn: 'blur',
      }),
      confirmPassword: new FormControl(null, {
        updateOn: 'blur',
      }),
    });
    // platfrom check
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.useInputPicker = true;
    }
  }

  onUpdateUser() {
    this.httpError = null;
    this.passError = null;
    let name = this.form.value.name.split(" ");
    let lname = name[1];
    if (name.length > 2) {
      lname += ' ' + name[2];
    }

    const modUser = {
      name: name[0],
      last_name: lname,
      email: this.form.value.email,
      password: this.form.value.newPassword,
      current_password: this.form.value.password,
      phone1: this.form.value.phone1,
      phone2: this.form.value.phone2
    }
    if (this.form.value.password === null) {
      delete modUser.password;
      delete modUser.current_password;
    } else {
      if (this.form.value.newPassword !== this.form.value.confirmPassword) {
        this.passError = 'Las contraseñas no concuerdan';
        return;
      }
    }

    this.lc.create({
      message: 'Alcualizando la informacion...'
    }).then(loadingEl => {
      loadingEl.present();
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.grabbedUser.access_token);
      this.http.put(API + '/account', modUser, { headers: headers })
        .subscribe(resData => {
          loadingEl.dismiss();

          if (resData['code'] === 200) {
            //update user controler
            this.us.setUser(new User(
              this.grabbedUser.id,
              resData['data'].name,
              resData['data'].last_name,
              resData['data'].img_profile,
              resData['data'].email,
              resData['data'].phone1,
              resData['data'].phone2,
              this.grabbedUser.role,
              this.grabbedUser.access_token,
            ));
            //resets values after succefull update
            this.form.setValue({
              name: this.form.value.name,
              email: this.form.value.email,
              phone1: this.form.value.phone1,
              phone2: this.form.value.phone2,
              password: null,
              newPassword: null,
              confirmPassword: null,
            });
            this.modalController.create({
              component: SuccessModalComponent,
              cssClass: 'modalSuccess',
            }).then(modalEl => {
              modalEl.present();
            });
          }
        }, e => {
          loadingEl.dismiss();
          this.httpError = e['error'].message;
        });

    });
  }

  onLoadImg() {
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
      promptLabelPhoto: 'Fotos',
      promptLabelPicture: 'Camara',
      promptLabelCancel: 'Cancelar'
    }).then(image => {
      this.saveImgToApi(image.dataUrl);
    }).catch(e => {
      console.log(e);
    });
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
    this.form.patchValue({ image: imgFile })
    const formData = new FormData();
    formData.append('image', imgFile);
    this.http.post(API + '/account/image', formData, { headers: this.headers })
      .subscribe(resData => {
        this.us.dbUserGrab(this.grabbedUser.access_token, this.grabbedUser.role);
        this.modalController.create({
          component: SuccessModalComponent,
          cssClass: 'modalSuccess',
        }).then(modalEl => {
          modalEl.present();
        });
      }, err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  getProfilePicture() {
    if (this.grabbedUser.img_profile && this.grabbedUser.img_profile !== IMAGE_URL_BLANK) {
      return this.grabbedUser.img_profile;
    }
    return 'assets/images/avatar.png';
  }

}
