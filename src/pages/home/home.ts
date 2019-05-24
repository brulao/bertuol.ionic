import { CaminhaoProvider } from './../../providers/caminhao/caminhao';
import { MotoristaProvider } from './../../providers/motorista/motorista';
import { ViagemProvider } from './../../providers/viagem/viagem';
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
  numeroViagens: string;
  numeroMotorista: string;
  numeroCaminhoes: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viagemSrv: ViagemProvider,
    private motoristaSrv: MotoristaProvider,
    private caminhaoSrv: CaminhaoProvider
  ) {
    if (UsuarioProvider.IsLogado) {
      this._loadData();
      console.log(this.nomeUsuario.nome);
    } else {
      this.nomeUsuario = 'Faça o login';
      this.navCtrl.setRoot('LoginPage');
    }
  }

  // Carregar dados
  private async _loadData(): Promise<void> {
    let totalViagem = await this.viagemSrv.contador();
    let totalMotorista = await this.motoristaSrv.contador();
    let totalCaminhao = await this.caminhaoSrv.contador();
    if (totalViagem.success) {
      this.numeroViagens = JSON.stringify(totalViagem.data.total)
      console.log("Número de viagens: " +  this.numeroViagens);
    }
    if (totalMotorista.success) {
      this.numeroMotorista = JSON.stringify(totalMotorista.data.total)
      console.log("Número de motoristas: " +  this.numeroMotorista);
    }
    if (totalCaminhao.success) {
      this.numeroCaminhoes = JSON.stringify(totalCaminhao.data.total)
      console.log("Número de caminhões: " +  this.numeroCaminhoes);
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
