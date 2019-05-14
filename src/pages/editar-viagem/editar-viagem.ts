import { AlertProvider } from './../../providers/alert/alert';
import { ViagemProvider } from './../../providers/viagem/viagem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViagemModel } from '../../app/models/viagemModel';

@IonicPage()
@Component({
  selector: 'page-editar-viagem',
  templateUrl: 'editar-viagem.html',
})
export class EditarViagemPage {

  viagem: ViagemModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viagemSrv: ViagemProvider, private alertSrv: AlertProvider) {
    let _viag = this.navParams.get('_viagem');
    if (_viag) {
      this.viagem = <ViagemModel>_viag;
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

  async excluir(): Promise<void> {
    try {
      this.alertSrv.confirm('Excluir', `Deseja excluir a viagem do dia ${this.viagem.dataViagem}?` , async () => {
        let excluirResult = await this.viagemSrv.delete(this.viagem._id);
        if (excluirResult.success) {
          this.alertSrv.toast('Viagem excluída','bottom');
          this.navCtrl.setRoot('ViagemPage');
        }
      });
    } catch (error) {
      console.log('Erro ao excluir', error);
    }
  }

}
