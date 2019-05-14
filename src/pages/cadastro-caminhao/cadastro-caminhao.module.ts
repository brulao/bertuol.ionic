import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCaminhaoPage } from './cadastro-caminhao';

@NgModule({
  declarations: [
    CadastroCaminhaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCaminhaoPage),
  ],
})
export class CadastroCaminhaoPageModule {}
