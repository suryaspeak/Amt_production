import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewtaskPage } from './viewtask';

@NgModule({
  declarations: [
    ViewtaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewtaskPage),
  ],
})
export class ViewtaskPageModule {}
