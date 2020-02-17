import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasictabPage } from './basictab';

@NgModule({
  declarations: [
    BasictabPage,
  ],
  imports: [
    IonicPageModule.forChild(BasictabPage),
  ],
})
export class BasictabPageModule {}
