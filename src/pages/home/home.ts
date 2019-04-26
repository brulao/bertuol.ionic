import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nomeUsuario = JSON.parse(localStorage.getItem('bertuol.user'));

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) 
  {
    if (UsuarioProvider.IsLogado){
      console.log(this.nomeUsuario.nome);
    } else {
      this.nomeUsuario = 'Faça o login';
      this.navCtrl.setRoot('LoginPage');
    }
  }

  viagens() {
     this.navCtrl.setRoot('ViagemPage');
  }

  sair() {
    this.navCtrl.setRoot('LoginPage');
    return localStorage.clear();
   }

}
