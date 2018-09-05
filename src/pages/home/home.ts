import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { InscricaoPage } from '../inscricao/inscricao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public idiomas;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl: ToastController) {
      this.idiomas = [
          {nome:"Alemao",preco:123},
          {nome:"Japones",preco:234},
          {nome:"Frances",preco:87}
      ];
  }
  dialogalert() {
    let alert = this.alertCtrl.create({
      title: 'As inscricoes acabam dia 20/09',
      subTitle: 'Procure o elefante branco para realizar o pagamento',
      buttons: ['Fechar']
    });
    alert.present();
  }

  dialoginput() {
    let alert = this.alertCtrl.create({
      title: 'Entre na sua conta',
      inputs: [
        {
          name: 'username',
          placeholder: 'Email'
        },
        {
          name: 'password',
          placeholder: 'Senha',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
        }
      ]
    });
    alert.present();
  }
  trocatela() {
    this.navCtrl.push(InscricaoPage.name);
  }
  Toast() {
    let toast = this.toastCtrl.create({
      message: 'Vá ao elefante branco em caso de dúvidas.',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
