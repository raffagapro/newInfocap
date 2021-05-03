import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { CameraResultType, CameraSource, Capacitor, Plugins } from '@capacitor/core';
import { AdicionalServiceService } from 'src/app/services/adicional-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-servicios-adicionales',
  templateUrl: './servicios-adicionales.page.html',
  styleUrls: ['./servicios-adicionales.page.scss'],
})
export class ServiciosAdicionalesPage implements OnInit {

  formAdicional: FormGroup
  useInputPicker = false;
  @ViewChild('hiddenImgInput') hiddenImgInputRef: ElementRef<HTMLInputElement>;
  loadedImages = [];
  loadedImagesDisplay = [];

  constructor(
    private router: Router,
    private menuController: MenuController,
    private adicional: AdicionalServiceService,
    private platform: Platform,
  ) { }


  ngOnInit() {
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.useInputPicker = true;
    }


    this.formAdicional = new FormGroup({
      detailes: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      photos: new FormControl(null, {
        updateOn: 'blur',
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
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
    //converting images to blob for diplaying
    const fr = new FileReader();
    fr.onload = () => {
      this.loadedImagesDisplay.push(fr.result.toString());
    };
    fr.readAsDataURL((e.target as HTMLInputElement).files[0]);
  }

  async saveImgToApi(imageData: string | File) {
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
    this.loadedImages.push(imgFile);
    this.loadedImagesDisplay.push(URL.createObjectURL(imgFile));
  }

  ionViewWillEnter() {
    this.menuController.enable(true, 'profesional');
  }

  openMenu() {
    this.menuController.open();
  }

  saveExtra() {
    this.router.navigate(['profesional/agendados/agendados-finalizar']);
  }

}
