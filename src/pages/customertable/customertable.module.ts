import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomertablePage } from './customertable';

@NgModule({
  declarations: [
    CustomertablePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomertablePage),
  ],
})
export class CustomertablePageModule {}
