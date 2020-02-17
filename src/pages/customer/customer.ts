import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CustomerviewPage } from '../customerview/customerview';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
token:any;
type:any;
customerlist:any;
user_id:any;
customer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestProvider) {
    this.token = JSON.parse(localStorage.getItem('menu'))
    console.log(this.token)
    this.type="Pc";
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.customerlist(formData).then(data => {
      this.customerlist = data['data'].customer;

      console.log(  this.customerlist)
    })
  }
  oncustomerselect(item){
    console.log(item)
    this.user_id = item;
    // var formData = new FormData();
    // formData.append('user_id', item);
    // formData.append('token', this.token);
    // this.rest.customerlist(formData).then(data => {
    //   this.customerlist = data['data'].customer
    //   console.log(data)
    // })
    
  }
  customerview(){
    if(this.customer==undefined){
      alert("*field is mandetory")
    }
    else{
      this.navCtrl.push(CustomerviewPage,{"user_id":this.user_id})
    }
    // this.navCtrl.push(CustomerviewPage,{"user_id":this.user_id})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
