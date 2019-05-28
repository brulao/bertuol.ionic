import { MotoristaProvider } from './../../providers/motorista/motorista';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MotoristaModel } from '../../app/models/motoristaModel';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-motorista',
  templateUrl: 'motorista.html',
})

export class MotoristaPage {
  nomeUsuario: '';
  lista: Array<MotoristaModel> = new Array<MotoristaModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private motoristaSrv: MotoristaProvider
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
    let motoristaResult = await this.motoristaSrv.get();
    if (motoristaResult.success) {
      this.lista = <Array<MotoristaModel>>motoristaResult.data;
    }
  }

  addOrEdit(model?: MotoristaModel): void {
    this.navCtrl.push('CadastroMotoristaPage', { _motorista: model });
  }

  home(): void {
    this.navCtrl.setRoot('HomePage');
  }

}
