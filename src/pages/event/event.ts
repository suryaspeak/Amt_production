import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { AddPage } from '../add/add';
import { JobPage } from '../job/job';
import { RestProvider } from '../../providers/rest/rest';
import { Network } from '@ionic-native/network';


/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  token:any;
  siteData: any;
  siteId:any;
  equipment:any=[];
  eventStatusData:any;
  EquipmentId:any;
  type:any;
  equipmentarr:any=[];
  Status:any=[];
  downfromtime:any="";
  downtotime:any="";
  siteIdget:any;
  customerbd:any=false;
  constructor(public network:Network,public loadingCtrl:LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    if(this.network.type!="none"){
      let loading = this.loadingCtrl.create({
        content: 'Please wait it may take few to several mins...'
      });
      loading.present();
      this.token = JSON.parse(localStorage.getItem('menu'))
      console.log(this.token)
      this.type="Pc";
      var formData = new FormData();
      formData.append('token', this.token);
      this.rest.siteGet(formData).then(data => {
        this.siteData = data['data'].site;
        this.siteIdget=this.siteData[0].SiteId; 
        this.siteId=this.siteIdget;
  
        console.log(data)
      }).then(()=>{
        this.onSiteChange(this.siteId)
        this.rest.eventStatus(formData).then(data => {
          this.eventStatusData = data['data'].event_status;
          loading.dismiss();
        })
      })
     
    

    }
    else{
        this.siteData=JSON.parse(localStorage.getItem("siteMaster"))
      alert("Offline")
    }
   
   
  
  }

  onSiteChange(item) {
    if(this.network.type!="none"){
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      this.siteId = item;
      var formData = new FormData();
      formData.append('id', item);
      formData.append('token', this.token);
      this.rest.equipmentBySite(formData).then(data => {
        this.equipment = data['data'].equipment;
        // this.equipmentarr=this.equipment[0].EqpPlanId;
        loader.dismiss();
        console.log(data)
      })
    }
  else{
    alert("Offline")
  }

  }
  presentModal() {
    const modal = this.modalCtrl.create(JobPage);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  view(){
   
    if(this.network.type!="none"){
      let loading = this.loadingCtrl.create({
        content: 'Please wait it may take few to several mins...'
      });
      loading.present();
      var formData = new FormData();
      // token,status,eqp_plan_id,startdate,enddate,site_id
      formData.append('site_id', this.siteId);
      formData.append('token', this.token);
      formData.append('eqp_plan_id', JSON.stringify(this.equipmentarr));
      formData.append('status', JSON.stringify(this.Status));
      formData.append('startdate', this.downfromtime);
      formData.append('customer_raised', this.customerbd);
      formData.append('enddate', this.downtotime);
  
      this.rest.viewEventsInProgressOrCompleted(formData).then(dd=>{
        console.log(dd['data'].viewEventIPC.data)
        if(dd['data'].viewEventIPC.data.length==0){
          loading.dismiss();
          alert("No data found")
        }
        else{
          let passarr=[
            this.siteId,
            this.token,
            JSON.stringify(this.equipmentarr),
            JSON.stringify(this.Status),
            this.downfromtime,
            this.customerbd,
            this.downtotime
  
  
          ]
          loading.dismiss();
          this.navCtrl.push(ViewPage,{dd:dd['data'].viewEventIPC.data,arr:passarr,"check":this.customerbd})
        }
        
      })
  
    }
    else{
      alert("Offline")

    }
  
    
  }
  add(){
    this.navCtrl.push(AddPage)
  }
  
}
