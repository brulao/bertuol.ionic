import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaminhaoModel } from '../../app/models/caminhaoModel';
import { CaminhaoProvider } from '../../providers/caminhao/caminhao';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-caminhao',
  templateUrl: 'caminhao.html',
})
export class CaminhaoPage {
  nomeUsuario:'';
  lista: Array<CaminhaoModel> = new Array<CaminhaoModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private caminhaoSrv: CaminhaoProvider
  ) {
    this.nomeUsuario = JSON.parse(localStorage.getItem('bertuol.user'));
    let token = UsuarioProvider.GetTokenAccess;
    if (token) {
      this._loadData();
    } else {
      this.navCtrl.setRoot('LoginPage');
    }
  }

  private async _loadData(): Promise<void> {
    let caminhaoResult = await this.caminhaoSrv.get();
    if (caminhaoResult.success) {
      this.lista = <Array<CaminhaoModel>>caminhaoResult.data;
    }
  }

  addOrEdit(model?: CaminhaoModel): void {
    this.navCtrl.push('CadastroCaminhaoPage', { _caminhao: model });
  }

  home(): void {
    this.navCtrl.setRoot('HomePage');
  } 



}
