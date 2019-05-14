import { MotoristaProvider } from './../../providers/motorista/motorista';
import { AlertProvider } from './../../providers/alert/alert';
import { ViagemProvider } from './../../providers/viagem/viagem';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { ViagemModel } from './../../app/models/viagemModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MotoristaModel } from '../../app/models/motoristaModel';

@IonicPage()
@Component({
  selector: 'page-admin-viagem',
  templateUrl: 'admin-viagem.html'
})
export class AdminViagemPage {

  listaM: Array<MotoristaModel> = new Array<MotoristaModel>();

  viagem: ViagemModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioSrv: MotoristaProvider, private viagemSrv: ViagemProvider, private alertSrv: AlertProvider) {
    let _viag = this.navParams.get('_viagem');
    if (_viag) {
      this.viagem = <ViagemModel>_viag;
    } else {
      this.viagem = new ViagemModel();
      this._loadData();
    }
  }

  private async _loadData(): Promise<void> {
    let usuarioResult = await this.usuarioSrv.get();
    if (usuarioResult.success) {
      this.listaM = <Array<MotoristaModel>>usuarioResult.data;
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.viagem._id) {
      let cadastroResult = await this.viagemSrv.post(this.viagem);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.viagemSrv.put(this.viagem._id, this.viagem);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Viagem salva com sucesso!', 'bottom');
      this.navCtrl.setRoot('ViagemPage');
    }
  }


}
