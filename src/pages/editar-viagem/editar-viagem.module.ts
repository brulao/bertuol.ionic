import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarViagemPage } from './editar-viagem';

@NgModule({
  declarations: [
    EditarViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarViagemPage),
  ],
})
export class EditarViagemPageModule {}
