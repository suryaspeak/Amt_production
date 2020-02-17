import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BacklogtablepopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-backlogtablepopover',
  templateUrl: 'backlogtablepopover.html',
})
export class BacklogtablepopoverPage {
   itemnew : any;
   pass: any;
  constructor(public viewController:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  this.pass=this.navParams.get('pass')
  console.log(this.pass)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacklogtablepopoverPage');
  }
  radioChecked(item){
    console.log(item)
    this.itemnew=item;
  
  }
  submit(){
    this.viewController.dismiss(this.itemnew);
  }
}
