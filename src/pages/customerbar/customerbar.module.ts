import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerbarPage } from './customerbar';

@NgModule({
  declarations: [
    CustomerbarPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerbarPage),
  ],
})
export class CustomerbarPageModule {}
