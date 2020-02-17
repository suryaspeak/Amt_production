import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';
/**
 * Generated class for the CustomerviewassetsdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerviewassetsdetails',
  templateUrl: 'customerviewassetsdetails.html',
})
export class CustomerviewassetsdetailsPage {
  dataget:any;
  branchname:any;
  equ:any;
  eqp_name:any;
  modelno:any;
  serial:any;
  mani:any;
  OriginalCommissionDate:any;
  dntime:any;
  evdesc:any;
  assigneng:any;
  Expected_Up_Time:any;
  // new
  status=null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataget=this.navParams.get('data');

    console.log(this.dataget)

    this.branchname=this.dataget.eqp_details[0].Branch;
    this.equ=this.dataget.eqp_details[0].Site;
    this.Expected_Up_Time=this.dataget.eqp_details[0].Expected_Up_Time
    this.eqp_name=this.dataget.eqp_details[1].EqpPlan;
    this.modelno=this.dataget.eqp_details[1].Model;
    this.serial=this.dataget.eqp_details[1].SerialNumber;
    this.mani=this.dataget.eqp_details[1].Manufacturer
    this.OriginalCommissionDate=this.dataget.eqp_details[1].OriginalCommissionDate;

    this.status = this.dataget.eqp_details[1].equipment_status;




    this.dntime=this.dataget.eqp_details[1].Actual_Down_Time;
    this.evdesc=this.dataget.eqp_details[1].event_description;
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerviewassetsdetailsPage');
  }

}
