import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerviewPage } from './customerview';

@NgModule({
  declarations: [
    CustomerviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerviewPage),
  ],
})
export class CustomerviewPageModule {}
