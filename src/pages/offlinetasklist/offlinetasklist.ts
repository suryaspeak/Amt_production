import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfflinetaskdetilsPage } from '../offlinetaskdetils/offlinetaskdetils';

/**
 * Generated class for the OfflinetasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlinetasklist',
  templateUrl: 'offlinetasklist.html',
})
export class OfflinetasklistPage {
  dataget : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataget=this.navParams.get('offlineTaskList')
    console.log(this.dataget)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfflinetasklistPage');
  }
  taskdetails(item){
    this.navCtrl.push(OfflinetaskdetilsPage,{id:item})
    console.log(item)
  }

}
