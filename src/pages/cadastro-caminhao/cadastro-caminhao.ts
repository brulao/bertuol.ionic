import { CaminhaoProvider } from './../../providers/caminhao/caminhao';
import { CaminhaoModel } from './../../app/models/caminhaoModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-cadastro-caminhao',
  templateUrl: 'cadastro-caminhao.html',
})
export class CadastroCaminhaoPage {

  caminhao: CaminhaoModel = new CaminhaoModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private caminhaoSrv: CaminhaoProvider, private alertSrv: AlertProvider) {
    let _cam = this.navParams.get('_caminhao');
    if (_cam) {
      this.caminhao = <CaminhaoModel>_cam;
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.caminhao._id) {
      let cadastroResult = await this.caminhaoSrv.post(this.caminhao);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.caminhaoSrv.put(this.caminhao._id, this.caminhao);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Caminhão salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('CaminhaoPage');
    }
  }

  async excluir(): Promise<void> {
    try {
      this.alertSrv.confirm('Excluir', `Deseja excluir o caminhão ${this.caminhao.placa}?` , async () => {
        let excluirResult = await this.caminhaoSrv.delete(this.caminhao._id);
        if (excluirResult.success) {
          this.alertSrv.toast('Caminhão excluído','bottom');
          this.navCtrl.setRoot('CaminhaoPage');
        }
      });
    } catch (error) {
      console.log('Erro ao excluir', error);
    }
  }

}
