import { MotoristaProvider } from './../../providers/motorista/motorista';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MotoristaModel } from '../../app/models/motoristaModel';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-cadastro-motorista',
  templateUrl: 'cadastro-motorista.html',
})
export class CadastroMotoristaPage {

  motorista: MotoristaModel = new MotoristaModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private motoristaSrv: MotoristaProvider, private alertSrv: AlertProvider) {
    let _mot = this.navParams.get('_motorista');
    if (_mot) {
      this.motorista = <MotoristaModel>_mot;
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.motorista._id) {
      let cadastroResult = await this.motoristaSrv.post(this.motorista);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.motoristaSrv.put(this.motorista._id, this.motorista);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Motorista salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('MotoristaPage');
    }
  }

  async excluir(): Promise<void> {
    try {
      this.alertSrv.confirm('Excluir', `Deseja excluir o motorista ${this.motorista.nome}?` , async () => {
        let excluirResult = await this.motoristaSrv.delete(this.motorista._id);
        if (excluirResult.success) {
          this.alertSrv.toast('Motorista excluído','bottom');
          this.navCtrl.setRoot('MotoristaPage');
        }
      });
    } catch (error) {
      console.log('Erro ao excluir', error);
    }
  }

}
