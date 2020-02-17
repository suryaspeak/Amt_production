// 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MenuController, ViewController, PopoverController, Slides  } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the CustomertablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customertable',
  templateUrl: 'customertable.html',
})
export class CustomertablePage {
  Family:any;
  token:any;
  listdata:any;
  month:any;
  kpiData:any;
  analysidSelection:any="all";
  selectedData:any = {title:"None Selected",id:0};
  customer:any;
  user_id:any;
  constructor(public popOver: PopoverController, public loadingCtrl:LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
 
    this.month="lm";
    let loading = this.loadingCtrl.create({
      content: 'Please wait it may take few to several mins...'
    });
    loading.present();
    this.token = JSON.parse(localStorage.getItem('menu'))
    this.customer=JSON.parse(localStorage.getItem('customer'))
    this.user_id=this.navParams.get('user_id')
    console.log(this.user_id)
    console.log(this.customer)
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('user_id', this.user_id);
   this.rest.customertable(formData).then(data=>{
     console.log(data)
    //  this.listdata=data['data'].lastmonthbyEquipment;
     loading.dismiss();
     this.kpiData=data['data'].lastMonth;
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
  let listData = [{title:"Settings",id:1},{title:"Logout",id:2},{title:"Profile",id:3},{title:"Help",id:4}]
  let popover = this.popOver.create(PopoverPage, { listData });

    popover.present({
      ev: ev
    });

    popover.onDidDismiss(data => {
      this.analysidSelection=data[1];
        

    console.log(data[1]);
    if(data[0]=="mtd"){
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('user_id', this.user_id);
      this.rest.customertable(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].currentMonth;
        console.log(this.kpiData)
      })
  
    }
    else if(data[0]=="three"){
  
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('user_id', this.user_id);
      this.rest.customertable(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].last3Month;
        console.log(this.kpiData)
      })
  
  
    }
    else if(data[0]=="six"){
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('user_id', this.user_id);
      this.rest.customertable(formData).then(data=>{
        console.log(data)
      
       
        this.kpiData=data['data'].last6Month;
        console.log(this.kpiData)
      })
  
  
    }
    else{
      this.token=JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('user_id', this.user_id);
      this.rest.customertable(formData).then(data=>{
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
// openPopover(myevent){
//   //console.log(this.sliderImgs);
//   let popover = this.popOver.create(PopoverPage);
//   //console.log(myevent);
//   popover.present({
//     ev: "myevent"
//   })
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomertablePage');
  }

}
