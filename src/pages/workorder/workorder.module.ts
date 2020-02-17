import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkorderPage } from './workorder';

@NgModule({
  declarations: [
    WorkorderPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkorderPage),
  ],
})
export class WorkorderPageModule {}
