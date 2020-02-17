import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RestProvider } from '../../providers/rest/rest';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  componentCode : any;
  siteData: any;
  token : any;
  eventStatusData : any;
  priorityGet : any;
  respons : any;
  activitytwo : any;
  eqpoffile: any;
  constructor(public toastCtrl:ToastController,public loadingCtrl:LoadingController,public platform:Platform,private iab: InAppBrowser,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  }
  sync(){

    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.ComponentCodesAll(formData).then(data => {
      this.componentCode = data['data'].component;
      localStorage.setItem("ComponentMaster",JSON.stringify(this.componentCode))
    })
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;
       localStorage.setItem("siteMaster",JSON.stringify(this.siteData))

      console.log(data)
    }).then(()=>{
      this.rest.eventStatus(formData).then(data => {
        this.eventStatusData = data['data'].event_status;
        localStorage.setItem("statusMaster",JSON.stringify(this.eventStatusData))
  
      }).then(()=>{
        this.rest.priorityGet(formData).then(data => {
  
          this.priorityGet = data['data'].priority;
          localStorage.setItem("priorityMaster",JSON.stringify(this.priorityGet))
    
        }).then(()=>{
          this.rest.responsibility(formData).then(data => {
            this.respons = data['data'].responsibility;
            localStorage.setItem("responsMaster",JSON.stringify(this.respons))
      
          }).then(()=>{
            this.rest.activity(formData).then(data => {
              this.activitytwo = data['data'].activity;
              localStorage.setItem("activityMaster",JSON.stringify(this.activitytwo))
          
            }).then(()=>{
              this.rest.employee(formData).then(data => {
                this.activitytwo = data['data'].activity;
                localStorage.setItem("activityMaster",JSON.stringify(this.activitytwo))
            
              })
            }).then(()=>{
              this.rest.equipmentoffline(formData).then(Data=>{
                this.eqpoffile=Data['data'].equipment;
                localStorage.setItem("equipmentMaster",JSON.stringify(this.eqpoffile))
              })
            })
          })
        })
      })
    })
  }
  download(){
    const options: InAppBrowserOptions = {
      toolbar: 'no',
      location: 'no',
      zoom: 'no'
  }

  this.platform.ready().then( () => {
    // const browser = this.iab.create("https://www.awebsite.co.uk", '_self', options);
 })
  }

  offLineData(){
    const loader = this.loadingCtrl.create({
      content: "Please wait offline data downloading...",

    });
    loader.present();
    var formData = new FormData();
    formData.append('token', this.token);

    this.rest.getOfflineTask(formData).then(data=>{
      
      localStorage.setItem("TaskOfflineData",JSON.stringify(data['offlineTask']))
      localStorage.setItem("TaskOfflineRawData",JSON.stringify(data['filterdata']))
     
    }).then(()=>{
      var formData = new FormData();
      formData.append('token', this.token);
      
      this.rest.getOfflineInspection(formData).then(datains=>{
        console.log(datains)
         
          try {
            localStorage.setItem("inspectionfilter",JSON.stringify(datains))
            alert("Download successfully");
          } catch (domException) {
           alert("Mobile internal storage size limit exceeded...")
          }
         
        loader.dismiss();
       
      })
    }).then(()=>{
      this.rest.offlineDownload(formData).then(data=>{
       
        localStorage.setItem('offlineData',(data['data'].commonFilters))
       
       
        // this.navCtrl.setRoot(HomePage)
      }).catch(err=>{
        console.log(JSON.stringify(err))
      })

    })
  }
  syncOffline (){
    const loader = this.loadingCtrl.create({
      content: "Please wait offline data syncing...",

    });
    loader.present();
    if(localStorage.getItem('offlineData')){
      var formData = new FormData();
      // formData.append('token', this.token);
      var onlineEventOffline = new FormData();
      onlineEventOffline.append('token', this.token);
      var TempData=JSON.parse(localStorage.getItem('offlineData'))
      console.log(TempData)
      onlineEventOffline.append('offlineEventEdit',JSON.stringify(TempData.event))
      this.rest.syncOfflineEventEditdata(onlineEventOffline).then(data=>{
        
  
      })
    }
  
   if(localStorage.getItem('EventLocal')){
    var offlineEvent = new FormData();
    offlineEvent.append('token', this.token);
    offlineEvent.append('arrOfflineEventCreate',(localStorage.getItem('EventLocal')))
    this.rest.syncOfflineEventdata(offlineEvent).then(data=>{
       console.log(data)

    })
   }
     if(localStorage.getItem('offlineqstionans')){
      var taskformdata = new FormData();
      taskformdata.append('token', this.token);
      taskformdata.append('inspectionOffline',(localStorage.getItem('offlineqstionans')))
      this.rest.syncOfflineInspection(taskformdata).then(data=>{
        localStorage.removeItem('offlineqstionans')
      })
     }
   
     if(localStorage.getItem('TaskOfflineRawData')){
      var task = new FormData();
      task.append('token', this.token);
      task.append('offlineTaskEdit',(localStorage.getItem('TaskOfflineRawData')))
      this.rest.syncOfflineTaskEditdata(task).then(data=>{
        console.log(data)
        let toast = this.toastCtrl.create({
          message: 'Task Online Edit Data Sync successfully',
          duration: 3000,
          position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

      })
     }
     if(localStorage.getItem('TaskLocal')){

      var task = new FormData();
      task.append('token', this.token);
      task.append('taskData',(localStorage.getItem('TaskLocal')))
      this.rest.syncOfflineTaskdata(task).then((data)=>{
           console.log(data)
           let toast = this.toastCtrl.create({
            message: 'Task Data Sync successfully',
            duration: 3000,
            position: 'bottom'
          });
        
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
        
          toast.present();

           localStorage.removeItem('TaskLocal')
      })
     }
  
  
     loader.dismiss();
     alert("Synced Succesfully")
  
  }
}
