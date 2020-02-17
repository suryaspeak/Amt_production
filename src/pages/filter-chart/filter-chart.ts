import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BarresultPage } from '../barresult/barresult';

/**
 * Generated class for the FilterChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-filter-chart',
  templateUrl: 'filter-chart.html',
})
export class FilterChartPage {
  BarBackData:any;
  analysis:any;
  month:any;
  siteItem:any='';
  arr:any=[];
  sixmonth:any;
  evsix:any;
  sitehideshow : boolean=false;
  fleedideshow : boolean=false;
  pass : any;
  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.pass=this.navParams.get('pass');
    console.log(this.pass)
    this.month="three"
    this.BarBackData=this.navParams.get('ev');
    console.log(this.BarBackData)
    this.sixmonth=this.navParams.get('sixmonth');
    this.evsix=this.navParams.get('evsix')
    if(localStorage.getItem('alalysisfilter')){
      this.analysis=localStorage.getItem('alalysisfilter');
     }else{
       this.analysis=""
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterChartPage');
  }
  kpiSubmit(){
     localStorage.setItem("alalysisfilter",this.analysis)

    console.log(this.analysis)
  this.viewCtrl.dismiss(this.arr)
  }
  mcqAnswer(item){
    if(item=="three"){
    //  this.BarBackData=[];
    }else{
      this.BarBackData=this.navParams.get('ev');
      console.log( this.BarBackData)
    }
    // console.log(item)
  }
  radioChecked(item){
    console.log(item.fleet)
    // console.log(this.analysis)
    this.arr={
      "mtbf":item.mtbf,
      "pa":item.physical_availibity,
      "sa":item.service_acuracy,
      "util":item.utilization,
      "mtbs": item.mtbs,
      "mttrf": item.mttrf,
      "scheduledOrplannedDowntime": item.scheduledOrplannedDowntime,
      "mttr":item.mttr,
      "name":this.analysis
    }
    // console.log(this.arr)
 
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
