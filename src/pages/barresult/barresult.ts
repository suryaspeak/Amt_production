import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Chart } from 'chart.js';
/**
 * Generated class for the BarresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-barresult',
  templateUrl: 'barresult.html',
})
export class BarresultPage {
  BarBackData: any;
  analysis: any;
  month: any;
  siteItem: any = '';
  arr: any = [];
  sixmonth: any;
  evsix: any;
  checkmonth:any;
  pass: any;
  sitehideshow : boolean=false;
  fleedideshow : boolean=false;
  constructor(public viewCtrl: ViewController, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pass=this.navParams.get("pass");
    this.BarBackData = this.navParams.get('ev');
    this.sixmonth = this.navParams.get('sixmonth');
    this.evsix = this.navParams.get('evsix')

    if(localStorage.getItem('popovermonthcurrent')){
      this.month=localStorage.getItem('popovermonthcurrent');
     }else{
      this.month = "three"
     }

    console.log(this.pass)
    // this.BarBackData.siteItem.site=localStorage.getItem('checkbutton')

  }


  kpiSubmit() {
    console.log(this.analysis)
    this.viewCtrl.dismiss(this.arr)
  }
  mcqAnswer(item) {
    this.checkmonth=item;
    localStorage.setItem('popovermonthcurrent',item);
    console.log(item)
    if (item == "three") {
      this.BarBackData = this.navParams.get('ev');
    } else {
      this.BarBackData = this.navParams.get('evsix');
      console.log(this.BarBackData)
    }
    // console.log(item)
  }
  radioChecked(item,tem) {
    console.log(tem)
    console.log(this.checkmonth)
    localStorage.setItem("checkbutton",tem)
    this.arr = {
      "mtbf": item.mtbf,
      "pa": item.physical_availibity,
      "sa": item.service_acuracy,
      "util": item.utilization,
      "mtbs": item.mtbs,
      "mttrf": item.mttrf,
      "scheduledOrplannedDowntime": item.scheduledOrplannedDowntime,
      "mttr":item.mttr,
      "name": this.analysis,
      "checkmonth":this.checkmonth
      
    }
   

  }

  sitehide(){
    this.sitehideshow=true;
    this.fleedideshow=false;
  }
  fleedhide(){
    this.fleedideshow=true;
    this.sitehideshow=false;
  }
}
