import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { MenuController, ViewController, PopoverController, Slides } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { BacklogtablepopoverPage } from '../backlogtablepopover/backlogtablepopover';
/**
 * Generated class for the BacklogtablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backlogtable',
  templateUrl: 'backlogtable.html',
})
export class BacklogtablePage {
  Family: any;
  token: any;
  newtabler :boolean=true;
  newnew: boolean=false;
  listdata: any;
  month: any;
  kpiData: any;
  pass : any;
  analysidSelection: any = "all";
  arrowcheck: boolean = false;
  selectedData: any = { title: "None Selected", id: 0 };
  header: any = "Last Month";
  header2:any="Current Month";
  hd:any=0;
  kpiCurrentMonth: any;
  ports: any = [];
  constructor(public popOver: PopoverController, public loadingCtrl: LoadingController, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {

     this.pass=this.navParams.get('pass')
    this.month = "lm";
    let loading = this.loadingCtrl.create({
      content: 'Please wait it may take few to several mins...'
    });
    loading.present();
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);

    this.rest.kpiDashboardTabularBacklog(formData).then(data => {
      console.log(data)
      //  this.listdata=data['data'].lastmonthbyEquipment;
      loading.dismiss();
      this.kpiData = data['data'].LastMonth;
      this.kpiCurrentMonth = data['data'].currentMonth;
      console.log(this.kpiData)
    }).catch(err => {
      alert("Service is down. Please try again later");
      loading.dismiss();
      console.log(err)
    })


  }

  temp() {

  }
  myCallbackFunction = function (_params) {
    return new Promise((resolve, reject) => {
      console.log("Hi")
      console.log(_params)
      resolve();
    });
  }
  // ionViewCanLeave() {
  //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  // }
  // ionViewDidLoad() {
  //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  //   console.log('ionViewDidLoad TableviewPage');
  // }

  openPopover(ev) {

    let popover = this.popOver.create(BacklogtablepopoverPage,{pass:this.pass});

    popover.present({
      ev: ev
    });

    popover.onDidDismiss(data => {
      if (data == "lastmonth") {
        this.hd=0
        this.header="Last Month"
        console.log(this.header)
        var formData = new FormData();
        formData.append('token', this.token);

        this.rest.kpiDashboardTabularBacklog(formData).then(data => {
          console.log(data)
          //  this.listdata=data['data'].lastmonthbyEquipment;

          this.kpiData = data['data'].LastMonth;
       
          console.log("lastmonth"+this.kpiData)
        }).catch(err => {
          alert("Service is down. Please try again later");

          console.log(err)
        })

      }
      else {
        this.hd=1
        this.header="Current Month"
        var formData = new FormData();
        formData.append('token', this.token);
    
       this.rest.kpiDashboardTabularBacklog(formData).then(data=>{
         console.log(data)
        //  this.listdata=data['data'].lastmonthbyEquipment;
        
         this.kpiData=data['data'].currentMonth;
       
         console.log("currentmonth",this.kpiData)
       }).catch(err=>{
         alert("Service is down. Please try again later");
        
         console.log(err)
       })
      }
      console.log(data)

    })
  }
  arrowleft() {
    this.newtabler=false;
    this.newnew=true;
    this.arrowcheck = true;
  }
  arrowRight() {
    this.newtabler=true;
    this.newnew=false;
    this.arrowcheck = false;
  }
}

