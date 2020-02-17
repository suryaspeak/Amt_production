import { Component } from '@angular/core';
import { NavController,MenuController,NavParams, ToastController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { EventPage } from '../event/event';
import { LoginPage } from '../login/login';
import { DashboardPage } from '../dashboard/dashboard';
import { RestProvider } from './../../providers/rest/rest';
import { InspectionsPage } from '../inspections/inspections';
import { TaskPage } from '../task/task';
import { CustomerPage } from '../customer/customer';
import { NotificationPage } from '../notification/notification';
import { SettingsPage } from '../settings/settings';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { AssignenginerPage } from '../assignenginer/assignenginer';
import { MajorcomponentPage } from '../majorcomponent/majorcomponent';
import { MajorcomponentfilterPage } from '../majorcomponentfilter/majorcomponentfilter';
import { EventOfflineCreatePage } from '../event-offline-create/event-offline-create';
import { OfflinetaskcreatePage } from '../offlinetaskcreate/offlinetaskcreate';
import { OfflinetaskfilterPage } from '../offlinetaskfilter/offlinetaskfilter';
import { OfflineinspectionsfilterPage } from '../offlineinspectionsfilter/offlineinspectionsfilter';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public dataget;
  public newdat;
  data:any;
  banner:any;
  token:any;
  testRadioOpen:any;
  testRadioResult:any;
  count:any;
  testOffline:any;
  constructor( public platform: Platform, public toast: ToastController, public network: Network,public sqlite: SQLite,public nav:NavParams,public rest:RestProvider,public navCtrl: NavController, public menu:MenuController,public alertCtrl: AlertController) {
   this.data=JSON.parse(localStorage.getItem('home'));
   this.token=JSON.parse(localStorage.getItem('menu'))
  //  alert(this.network.type)
   if(this.network.type!="none"){
     this.testOffline="on";
    var formData = new FormData();
    formData.append('token', this.token);
     this.rest.slider(formData).then(data=>{
       this.banner=data['data'].slider;
   
     }).catch(err=>{
       alert("Service is down. Please try again later");
      
    
     })

 
     setInterval(() => { 
      this.notificationCount(); // Now the "this" still references the component
   }, 3000);
 

   }
   else{
    this.testOffline="off"
   }
 

    this.menu.swipeEnable(true);

    
   }
   

   notificationCount(){

    this.token=JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.NotificationCount(formData).then(data=>{
      this.count=data['data'].notification_count
   
    })
   }
  doConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Do you really want to log out?',
     
      buttons: [
        {
          text: 'no',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'yes',
          handler: () => {
            // localStorage.removeItem('home');
          localStorage.clear();
          this.navCtrl.setRoot(LoginPage)
          }
        }
      ]
    });
    confirm.present()
  }
  notification(){
    this.navCtrl.push(NotificationPage)
  }
  dashboard(item){
      console.log(item)
    if(item=="2"){
      // this.navCtrl.push(BreakPage)
    }
    if(item=="8"){
      // this.navCtrl.push(ViewassetsPage)
    }
    if(item=="10"){
      // this.navCtrl.push(FeedbackPage)
    }
    if(item=="15"){
      // this.navCtrl.push(OfflineinspectionsfilterPage)
      if(this.network.type!="none"){
       this.navCtrl.push(InspectionsPage)
       
      }else{
          this.navCtrl.push(OfflineinspectionsfilterPage)
      }
  
    }
    if(item=='11'){ 
      // this.navCtrl.push(EventOfflineCreatePage)
      if(this.network.type!="none"){
      this.navCtrl.push(EventPage)
       
      }else{
           this.navCtrl.push(EventOfflineCreatePage)
      }
     
    }
    if(item=='1'){ 
     this.navCtrl.push(DashboardPage)
    }
    if(item=='12'){ 
      // this.navCtrl.push(OfflinetaskfilterPage)
      if(this.network.type!="none"){
       this.navCtrl.push(TaskPage)
       
        }else{
         this.navCtrl.push(OfflinetaskfilterPage)
        }

     }
     if(item=='13'){ 
      this.navCtrl.push(CustomerPage)
     }
     if(item=='144'){ 
      this.navCtrl.push(SettingsPage)
     }
     if(item=='14'){ 
      this.navCtrl.push(MajorcomponentfilterPage)
     }
  }
  

  // showEvent() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Select');

  //   alert.addInput({
  //     type: 'radio',
  //     label: 'In Progress and Completed Activities',
  //     value: 'ipc',
  //     checked: true
  //   },
  //   );
  //   alert.addInput({
  //     type: 'radio',
  //     label: 'Upcoming Maintanence Activities',
  //     value: 'yts',
     
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'OK',
  //     handler: data => {
  //       if (data=='ipc'){
  //         var formData = new FormData();
  //         formData.append('token', this.token);
  //         // this.rest.progresscompt(formData).then(data=>{
  //         //   console.log(data)
  //         // })
  //         this.navCtrl.push(EventPage,{check:"ipc"})
  //       }
  //       else if(data=='yts'){
           
          
  //         this.navCtrl.push(EventPage,{check:"yts"})
  //       }
  //       else {
  //         this.navCtrl.push(EventPage,{check:"mjc"})
  //       }
  //       this.testRadioOpen = false;
  //       this.testRadioResult = data;
  //     }
  //   });
  //   alert.present();
  // }
  showcomponent() {
    let alert = this.alertCtrl.create();
    alert.setTitle('select');

    alert.addInput({
      type: 'radio',
      label: 'Component Current Status',
      value: 'ccs',
      checked: true
    },
    );
    alert.addInput({
      type: 'radio',
      label: 'Component History',
      value: 'ch',
     
    });
     alert.addInput({
       type: 'radio',
      label: 'Major Components',
       value: 'mjc',
     
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if (data=='ccs'){
          var formData = new FormData();
          formData.append('token', this.token);
          // this.rest.progresscompt(formData).then(data=>{
          //   console.log(data)
          // })
          // this.navCtrl.push(ComponentPage,{check:"ccs"})
        }
         else if(data=='ch'){
           
          
          // this.navCtrl.push(ComponentPage,{check:"ch"})
         }
        else {
          // this.navCtrl.push(ComponentPage,{check:"mjc"})
        }
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
  showkpi() {
    let alert = this.alertCtrl.create();
    alert.setTitle('select');

    alert.addInput({
      type: 'radio',
      label: 'Tabular View',
      value: 'tv',
      checked: true
    },
    );
    alert.addInput({
      type: 'radio',
      label: 'Line Chart View',
      value: 'lc',
     
    });
     alert.addInput({
       type: 'radio',
      label: 'Bar Graph View',
       value: 'bg',
     
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        if (data=='tv'){
          var formData = new FormData();
          formData.append('token', this.token);
         
          // this.navCtrl.push(TableviewPage,{check:"tv"})
        }
         else if(data=='lc'){
           
          
          this.navCtrl.push(DashboardPage,{check:"lc"})
         }
        else {
          // this.navCtrl.push(BarchatPage)
        }
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
  tapEvent(item){
    console.log(item)

  }

 
}


