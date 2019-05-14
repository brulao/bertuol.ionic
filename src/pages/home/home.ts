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
  ) {
    if (UsuarioProvider.IsLogado) {
      console.log(this.nomeUsuario.nome);
    } else {
      this.nomeUsuario = 'Faça o login';
      this.navCtrl.setRoot('LoginPage');
    }
  }

  // Viagens
  cadastrar() {
    this.navCtrl.push('AdminViagemPage');
  }

  viagens() {
    this.navCtrl.push('ViagemPage');
  }

  // Motoristas
  cadastrarMotorista() {
    this.navCtrl.push('CadastroMotoristaPage');
  }

  listarMotorista() {
    this.navCtrl.push('MotoristaPage');
  }

  // Caminhões
  cadastrarCaminhao() {
    this.navCtrl.push('CadastroCaminhaoPage');
  }

  listarCaminhao() {
    this.navCtrl.push('CaminhaoPage');
  }

  sair() {
    this.navCtrl.setRoot('LoginPage');
    return localStorage.clear();
  }

}
