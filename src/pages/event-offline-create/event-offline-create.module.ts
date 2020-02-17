import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventOfflineCreatePage } from './event-offline-create';

@NgModule({
  declarations: [
    EventOfflineCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(EventOfflineCreatePage),
  ],
})
export class EventOfflineCreatePageModule {}
