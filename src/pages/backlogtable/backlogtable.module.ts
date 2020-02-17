import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacklogtablePage } from './backlogtable';

@NgModule({
  declarations: [
    BacklogtablePage,
  ],
  imports: [
    IonicPageModule.forChild(BacklogtablePage),
  ],
})
export class BacklogtablePageModule {}
