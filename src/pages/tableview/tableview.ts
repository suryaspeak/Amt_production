import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { MenuController, ViewController, PopoverController, Slides  } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the TableviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tableview',
  templateUrl: 'tableview.html',
})
export class TableviewPage {
Family:any;
token:any;
listdata:any;
month:any;
new:boolean=true;
newnew: boolean=false;
kpiData:any;
analysidSelection:any="all";
arrowcheck:boolean=false;
selectedData:any = {title:"None Selected",id:0};
header:any="Last Month";
arrowright:boolean =false;
pass : any;
  constructor(public popOver: PopoverController, public loadingCtrl:LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.pass=this.navParams.get('pass')

    console.log(this.pass)
  
    this.month="lm";
    let loading = this.loadingCtrl.create({
      content: 'Please wait it may take few to several mins...'
    });
    loading.present();
    this.token=JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);

   this.rest.table(formData).then(data=>{
     console.log(data)
    //  this.listdata=data['data'].lastmonthbyEquipment;
     loading.dismiss();
     if(data['data'].lastMonth){
      this.kpiData=data['data'].lastMonth;
     }
     else{
       
     }
     
     console.log(this.kpiData)
   }).catch(err=>{
     alert("Service is down. Please try again later");
     loading.dismiss();
     console.log(err)
   })
  
 
  }
  myCallbackFunction = function(_params) {
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
  // let listData = [{title:"Settings",id:1},{title:"Logout",id:2},{title:"Profile",id:3},{title:"Help",id:4}]
  let popover = this.popOver.create(PopoverPage, { pass:this.pass });

    popover.present({
      ev: ev
    });

    popover.onDidDismiss(data => {
      console.log(data)
      this.analysidSelection=data[1];
        

    console.log(data[1]);
    if(data[0]=="mtd"){
      this.header="MTD"
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
  
      this.rest.table(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].currentMonth;
        console.log(this.kpiData)
      })
  
    }
    else if(data[0]=="three"){
      this.header="Last 3 Month"
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
  
      this.rest.table(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].last3Month;
        console.log(this.kpiData)
      })
  
  
    }
    else if(data[0]=="six"){
      this.header="Last 6 Month"
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
  
      this.rest.table(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].last6Month;
        console.log(this.kpiData)
      })
  
  
    }
    else{
      this.header="Last Month"
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
  
      this.rest.table(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].lastMonth;
        console.log(this.kpiData)
      })
  
    }

    if(data!=null){
        this.selectedData = data
    }
  })
}
arrowleft(){
  console.log("Hi")
  this.new=false;
  this.newnew=true;
  this.arrowright=true
  this.arrowcheck=true;
}
arrowRight(){
  console.log("hello")
  this.new=true;
  this.newnew=false;
  this.arrowcheck=false;
}
}
