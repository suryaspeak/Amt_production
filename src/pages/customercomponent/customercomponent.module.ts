import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomercomponentPage } from './customercomponent';

@NgModule({
  declarations: [
    CustomercomponentPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomercomponentPage),
  ],
})
export class CustomercomponentPageModule {}
