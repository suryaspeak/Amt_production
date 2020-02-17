import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventdetails',
  templateUrl: 'eventdetails.html',
})
export class EventdetailsPage {
  dataGet: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataGet=this.navParams.get('data')
    console.log(this.dataGet)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdetailsPage');
  }

}
