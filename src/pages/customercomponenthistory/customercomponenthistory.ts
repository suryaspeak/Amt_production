import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { ComponentdetailsPage } from '../componentdetails/componentdetails';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the CustomercomponenthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customercomponenthistory',
  templateUrl: 'customercomponenthistory.html',
})
export class CustomercomponenthistoryPage {
  public check;
  ccs: boolean = false;
  token: any;
  ch: boolean = false;
  mc: boolean = false;
  conponentcode: any;
  name: any;
  idget: any;
  equipmentget: any = [];
  equipnetall: any ;
  sub: any;
  component_code: any;
  approval_status: any;
  equipmentselect: any = "";
  others: any;
  select: any;
  status: any;
  tasktype: any;
  tablenew: any;
  user_id:any;
  constructor(public loadingCtrl: LoadingController, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'));
    this.user_id=this.navParams.get('user_id');
    console.log(this.user_id)
    this.tasktype = "cc";
    var formData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('token', this.token);

    this.rest.site(formData).then(data => {
      this.name = data['data'].site;

    }).catch(err=>{
      alert("Service is down. Please try again later");
     
      console.log(err)
    })

    this.rest.componentCode(formData).then(data => {
      this.conponentcode = data['data'].component;
    }).catch(err=>{
      alert("Service is down. Please try again later");
      
      console.log(err)
    })
 
 
 
  }
  onset(){
    
  }
  onChange(id) {
    this.idget = id;
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('user_id', this.user_id);
    formData.append('id', id)
    
    this.rest.equtment(formData).then(datsat => {
      this.sub = datsat['data'].equipment;
    }).then(()=>{
      console.log(this.sub)
    })
  }
  dashboadHistory() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',

    });

    loading.present();


    var formData = new FormData();

    formData.append('token', this.token);
    formData.append('site_id', this.idget);
    if (this.equipnetall) {
      formData.append('eqp_plan_id', JSON.stringify(this.equipnetall));
    }
    else {
      formData.append('eqp_plan_id', this.equipnetall = null);
    }

    if (this.component_code) {
      formData.append('comp_code_id', JSON.stringify(this.component_code));
    }
    else {
      formData.append('comp_code_id', this.component_code = null);

    }
    formData.append('user_id', this.user_id);
    this.rest.dashbordHistory(formData).then(data => {
      this.tablenew = data['data'].component_history;
      loading.dismiss();
    }).catch(err=>{
      alert("Service is down. Please try again later");
     
      console.log(err)
    })

  }
  public getObjectKey(index) {

    return Object.keys(index);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomercomponenthistoryPage');
  }

}
