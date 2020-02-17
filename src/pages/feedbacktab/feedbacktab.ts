import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasictabPage } from '../basictab/basictab';
import { TaskPage } from '../task/task';

/**
 * Generated class for the FeedbacktabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedbacktab',
  templateUrl: 'feedbacktab.html',
})
export class FeedbacktabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbacktabPage');
  }
basic(){
  this.navCtrl.push(BasictabPage)
}
Task(){
  this.navCtrl.push(TaskPage)
}
}
