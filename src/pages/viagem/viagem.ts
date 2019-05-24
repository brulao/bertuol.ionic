import { UsuarioProvider } from './../../providers/usuario/usuario';
import { ViagemProvider } from './../../providers/viagem/viagem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagemModel } from '../../app/models/viagemModel';

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {

  lista: Array<ViagemModel> = new Array<ViagemModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viagemSrv: ViagemProvider
  ) {
    let token = UsuarioProvider.GetTokenAccess;
    if (token) {
      this._loadData();
    } else {
      this.navCtrl.setRoot('LoginPage');
    }
  }

  private async _loadData(): Promise<void> {
    let viagemResult = await this.viagemSrv.get();
    let totalViagem = await this.viagemSrv.contador();
    if (viagemResult.success) {
      this.lista = <Array<ViagemModel>>viagemResult.data;
      console.log("Número de registros: " +  JSON.stringify(totalViagem.data.total));
    } 
  }

  home() {
    this.navCtrl.setRoot('HomePage');
  }

  addOrEdit(model?: ViagemModel): void {
    this.navCtrl.push('AdminViagemPage', { _viagem: model });
  }

  editarViagem(model?: ViagemModel): void {
    this.navCtrl.push('EditarViagemPage', { _viagem: model });
  }

}
