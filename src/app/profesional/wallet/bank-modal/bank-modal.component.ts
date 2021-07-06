import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, PickerController } from '@ionic/angular';
import axios from 'axios';
import { Observable, Subscription } from 'rxjs';
import { PickerOptions } from '@ionic/core'
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
  rut = null
  bancoSeleccionado:string
  selectedCard:string

  bancos = [
    { id: "504", name: "BBVA" },
    { id: "001", name: "Banco de Chile" },
    { id: "014", name: "Scotiabank" },
    { id: "031", name: "HSBC" },
    { id: "037", name: "Santander" },

  ];

  tipoTarjeta = [
    { id: 1, name: 'Visa'},
    { id: 2, name: 'MasterCard'},
  ]

  constructor(
    private us: UserService,
    private lc: LoadingController,
    private modalController: ModalController,
    private pickerController: PickerController
  ) { }

  ngOnInit() {

    this.userSub = this.us.loggedUser.subscribe(user => {
      this.grabbedUser = user;
      this.headers = 'Bearer ' + this.grabbedUser.access_token;
    });
  }

  validateInformation(completeName, cardNumber, clabe, banco, type) {
    return completeName.length > 0 && cardNumber.length == 16 && clabe.length == 12 && banco.length > 0 && type.length > 0
  }

  async saveBankAccount(completeName, cardNumber, clabe, banco, type) {
    this.lc.create({
      message: "Guardando información..."
    }).then(loadingEl => {
      loadingEl.present();

      let bancoSeleccionado = this.bancos.find(b => b.name === banco)
      let typeCardSelected = this.tipoTarjeta.find(b => b.name === type)

      let data_bank = {
        professional_profile_id: 1,
        bank_id: bancoSeleccionado.id,
        debit_account: cardNumber,
        clabe: clabe,
        name: completeName,
        type: typeCardSelected.name,
        name_bank: bancoSeleccionado.name
      }

      axios.post(API + '/supplier/bankaccount', data_bank, { headers: { Authorization: this.headers } }).then(resData => {
        loadingEl.dismiss()
        this.modalController.dismiss();
      }).catch(err => {
        console.log(err)
        loadingEl.dismiss()
      })
    }).catch(err => {
      console.log(err)
      this.lc.dismiss()
    })
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
            this.bancoSeleccionado = value.bank.text
          }
        }
      ],
      columns:[{
        name:'bank',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  async showPickerCardType() {
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
            this.selectedCard = value.type.text
          }
        }
      ],
      columns:[{
        name:'type',
        options:this.getColumnCardOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnCardOptions(){
    let options = [];
    this.tipoTarjeta.forEach(x => {
      options.push({text: x.name, value: x.id});
    });
    return options;
  }

  getColumnOptions(){
    let options = [];
    this.bancos.forEach(x => {
      options.push({text: x.name, value: x.id});
    });
    return options;
  }

  formatRUT(){
    
  }

}
