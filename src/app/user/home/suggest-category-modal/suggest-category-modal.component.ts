import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { SuccessModalComponent } from 'src/app/shared/success-modal/success-modal.component';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-suggest-category-modal',
  templateUrl: './suggest-category-modal.component.html',
  styleUrls: ['./suggest-category-modal.component.scss'],
})
export class SuggestCategoryModalComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;
  errorMessage: string = '';
  grabbedUser: User;
  userSub: Subscription;

  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router,
    private userService: UserService,
  ) {

  }

  ngOnInit() {
    this.userSub = this.userService.loggedUser.subscribe(user => {
      this.grabbedUser = user;
    });
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
      let response = await axios.post(
        `${API}/categories/suggestion`,
        {
          user_id: this.grabbedUser.id,
          message: this.form.value.description
        },
        {
          headers: {
            Authorization: `Bearer ${this.grabbedUser.access_token}`
          }
        }
      );
      if(response.data && response.data.status !== 200){
        this.error = false;
        this.errorMessage = 'Ocurrió un error al enviar la solicitud.';
      }
    } catch (error) {
      this.error = true;
    }
    loader.dismiss();

    if (!this.error) {
      await this.modalController.dismiss();
      const successModal = await this.modalController.create({
        component: SuccessModalComponent,
        componentProps: {
          message: 'SE HA ENVIADO LA INFORMACIÓN CORRECTAMENTE',
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
