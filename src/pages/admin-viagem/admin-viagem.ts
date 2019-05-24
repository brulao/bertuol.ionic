import { MotoristaProvider } from './../../providers/motorista/motorista';
import { AlertProvider } from './../../providers/alert/alert';
import { ViagemProvider } from './../../providers/viagem/viagem';
import { ViagemModel } from './../../app/models/viagemModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MotoristaModel } from '../../app/models/motoristaModel';
import { CaminhaoModel } from '../../app/models/caminhaoModel';
import { CaminhaoProvider } from '../../providers/caminhao/caminhao';

@IonicPage()
@Component({
  selector: 'page-admin-viagem',
  templateUrl: 'admin-viagem.html'
})
export class AdminViagemPage {

  listaM: Array<MotoristaModel> = new Array<MotoristaModel>();
  listaC: Array<CaminhaoModel> = new Array<CaminhaoModel>();

  viagem: ViagemModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioSrv: MotoristaProvider, private caminhaoSrv: CaminhaoProvider, private viagemSrv: ViagemProvider, private alertSrv: AlertProvider) {
    let _viag = this.navParams.get('_viagem');
    if (_viag) {
      this.viagem = <ViagemModel>_viag;
      this._loadData();
    } else {
      this.viagem = new ViagemModel();
      this._loadData();
    }
  }

  private async _loadData(): Promise<void> {
    let usuarioResult = await this.usuarioSrv.get();
    let caminhaoResult = await this.caminhaoSrv.get();
    if (usuarioResult.success) {
      this.listaM = <Array<MotoristaModel>>usuarioResult.data;
      this.listaC = <Array<CaminhaoModel>>caminhaoResult.data;
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.viagem._id) {
      this.viagem.kilometragem = this.viagem.kmFinal - this.viagem.kmInicial;
      this.viagem.consumo = this.viagem.kilometragem / this.viagem.quantidadeLitros;
      let cadastroResult = await this.viagemSrv.post(this.viagem);
      sucesso = cadastroResult.success;
    } else {
      this.viagem.kilometragem = this.viagem.kmFinal - this.viagem.kmInicial;
      this.viagem.consumo = this.viagem.kilometragem / this.viagem.quantidadeLitros;
      let updateResult = await this.viagemSrv.put(this.viagem._id, this.viagem);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Viagem salva com sucesso!', 'bottom');
      this.navCtrl.setRoot('ViagemPage');
    }
  }


}
