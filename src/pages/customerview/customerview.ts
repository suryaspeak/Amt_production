import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomertablePage } from '../customertable/customertable';
import { RestProvider } from '../../providers/rest/rest';
import { CustomerlinePage } from '../customerline/customerline';
import { CustomerbarPage } from '../customerbar/customerbar';
import { CustomerassetsPage } from '../customerassets/customerassets';
import { CustomercomponentPage } from '../customercomponent/customercomponent';
import { CustomercomponenthistoryPage } from '../customercomponenthistory/customercomponenthistory';
import { CustomercomponentmajorPage } from '../customercomponentmajor/customercomponentmajor';
/**
 * Generated class for the CustomerviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerview',
  templateUrl: 'customerview.html',
})
export class CustomerviewPage {
  user_id:any;
  token:any;
  tablecus:any;
  customer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider) {
    this.user_id=this.navParams.get('user_id')
    this.token = JSON.parse(localStorage.getItem('menu'))
    console.log(this.token)
    console.log(  this.user_id)

  }
  table(){
    //  var formData = new FormData();
    // formData.append('user_id', this.user_id);
    // formData.append('token', this.token);
    // this.rest.customertable(formData).then(data => {
    //   this.tablecus = data['data'].kpiDashboard
    //   this.customer = data
    //   console.log(this.customer)
    // })
    this.navCtrl.push(CustomertablePage,{"customer":this.customer,"user_id": this.user_id})
  }
  line(){
    //  var formData = new FormData();
    // formData.append('user_id', this.user_id);
    // formData.append('token', this.token);
    // this.rest.customertable(formData).then(data => {
    //   this.tablecus = data['data'].kpiDashboard
    //   this.customer = data
    //   console.log(this.customer)
    // })
    this.navCtrl.push(CustomerlinePage,{"user_id": this.user_id})
  }
  bar(){
    //  var formData = new FormData();
    // formData.append('user_id', this.user_id);
    // formData.append('token', this.token);
    // this.rest.customertable(formData).then(data => {
    //   this.tablecus = data['data'].kpiDashboard
    //   this.customer = data
    //   console.log(this.customer)
    // })
    this.navCtrl.push( CustomerbarPage,{"user_id": this.user_id})
  }
  assets(){
    this.navCtrl.push(CustomerassetsPage ,{"user_id": this.user_id})
  }
  componentcurent(){
    this.navCtrl.push(CustomercomponentPage ,{"user_id": this.user_id})
  }
  componenthistory(){
    this.navCtrl.push(CustomercomponenthistoryPage,{"user_id": this.user_id})
  }
  componentmajor(){
    this.navCtrl.push(CustomercomponentmajorPage,{"user_id": this.user_id})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerviewPage');
  }

}
