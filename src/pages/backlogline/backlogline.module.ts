import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackloglinePage } from './backlogline';

@NgModule({
  declarations: [
    BackloglinePage,
  ],
  imports: [
    IonicPageModule.forChild(BackloglinePage),
  ],
})
export class BackloglinePageModule {}
