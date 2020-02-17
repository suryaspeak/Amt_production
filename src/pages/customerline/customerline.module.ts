import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerlinePage } from './customerline';

@NgModule({
  declarations: [
    CustomerlinePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerlinePage),
  ],
})
export class CustomerlinePageModule {}
