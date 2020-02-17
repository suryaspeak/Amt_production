import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfflinetasklistPage } from './offlinetasklist';

@NgModule({
  declarations: [
    OfflinetasklistPage,
  ],
  imports: [
    IonicPageModule.forChild(OfflinetasklistPage),
  ],
})
export class OfflinetasklistPageModule {}
