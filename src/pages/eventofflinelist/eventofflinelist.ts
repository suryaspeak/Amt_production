import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditeventPage } from '../editevent/editevent';
import { EditeventofflinePage } from '../editeventoffline/editeventoffline';

/**
 * Generated class for the EventofflinelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventofflinelist',
  templateUrl: 'eventofflinelist.html',
})
export class EventofflinelistPage {
   list :any;
   siteId : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list=this.navParams.get('id');
    this.siteId=this.navParams.get('siteId')
    console.log(this.list)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventofflinelistPage');
  }
  edit(item){
     console.log(item)
     this.navCtrl.push(EditeventofflinePage,{"arr":item,"siteId":this.navParams.get('siteId')})
  }
}
