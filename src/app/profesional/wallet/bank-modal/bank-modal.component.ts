import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import axios from 'axios';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { API } from 'src/environments/environment';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss'],
})
export class BankModalComponent implements OnInit {
  userSub: Subscription;
  grabbedUser: User;
  headers: string;

  completeName: string
  cardNumber:string 
  clabe:string; 
  banco:string;

  bancos = [
    { id: "001", name: "Banco de Chile" },
    { id: "009", name: "Banco Internacional" },
    { id: "014", name: "Scotiabank Chile" },
    { id: "016", name: "Banco de Credito E Inversiones" },
    { id: "028", name: "Banco Bice" },
    { id: "031", name: "HSBC Bank" },
    { id: "037", name: "Banco Santander-chile" },
    { id: "039", name: "Itaú Corpbanca" },
    { id: "049", name: "Banco Security" },
    { id: "051", name: "Banco Falabella" },
    { id: "053", name: "Banco Ripley" },
    { id: "054", name: "Rabobank Chile" },
    { id: "055", name: "Banco Consorcio" },
    { id: "056", name: "Banco Penta" },
    { id: "504", name: "Banco BBVA" },
    { id: "059", name: "Banco BTG Pactual Chile" },
    { id: "012", name: "Banco del Estado de Chile" },
  ];

  constructor(
    private us: UserService,
    private lc: LoadingController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });
  }

  validateInformation(completeName, cardNumber, clabe, banco) {
    return completeName.length > 0 && cardNumber.length == 16 && clabe.length == 18 && banco.length > 0
  }

  async saveBankAccount(completeName, cardNumber, clabe, banco) {
    this.lc.create({
      message: "Guardando información..."
    }).then(loadingEl => {
      loadingEl.present();

      let bancoSeleccionado = this.bancos.find(b => b.id === banco)

      let data_bank = {
        professional_profile_id: 1,
        bank_id: bancoSeleccionado.id,
        debit_account: cardNumber,
        clabe: clabe,
        name: completeName,
        type: 1,
        name_bank: bancoSeleccionado.name
      }

      axios.post(API + '/supplier/bankaccount', data_bank, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss()
        this.modalController.dismiss();
      }).catch(err => {
        console.log(err)
        loadingEl.dismiss()
      })
      console.log(data_bank)
    }).catch(err => {
      console.log(err)
      this.lc.dismiss()
    })
  }

}
