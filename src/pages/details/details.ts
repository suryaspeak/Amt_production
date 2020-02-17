import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { WorkorderPage } from '../workorder/workorder';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
items:any;
information:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
   this.items="subho";
  
   let localData = http.get('assets/information.json').map(res => res.json().items);
   localData.subscribe(data => {
     this.information = data;
   })
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  work(){
    this.navCtrl.push(WorkorderPage)
  }
}
