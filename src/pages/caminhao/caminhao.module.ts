import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaminhaoPage } from './caminhao';

@NgModule({
  declarations: [
    CaminhaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CaminhaoPage),
  ],
})
export class CaminhaoPageModule {}
