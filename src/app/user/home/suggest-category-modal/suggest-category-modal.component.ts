import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { SuccessModalComponent } from 'src/app/shared/success-modal/success-modal.component';

@Component({
  selector: 'app-suggest-category-modal',
  templateUrl: './suggest-category-modal.component.html',
  styleUrls: ['./suggest-category-modal.component.scss'],
})
export class SuggestCategoryModalComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router,
  ) {

  }

  ngOnInit() {
    //form
    this.form = new FormGroup({
      description: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  async sendSuggestion() {
    let loader = await this.loadingController.create({
      message: 'Enviando información...'
    });
    loader.present();
    try {
      //TODO: Add send data logic
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
      this.error = false;
    } catch (error) {
      this.error = true;
    }
    loader.dismiss();

    if (!this.error) {
      await this.modalController.dismiss();
      const successModal = await this.modalController.create({
        component: SuccessModalComponent,
        componentProps: {
          message: 'Se ha enviado la información correctamente',
          redirect: false,
        },
        cssClass: 'modalSuccess',
      });
      successModal.present();
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
