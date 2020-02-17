import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfflinetaskcreatePage } from '../offlinetaskcreate/offlinetaskcreate';
import { OfflinetasklistPage } from '../offlinetasklist/offlinetasklist';
import { TitleCasePipe } from '@angular/common';

/**
 * Generated class for the OfflinetaskfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 **/

@IonicPage()
@Component({
  selector: 'page-offlinetaskfilter',
  templateUrl: 'offlinetaskfilter.html',
})
export class OfflinetaskfilterPage {
  Offlinelist: any;
  offlineMaster: any;
  equtment: any;
  eventStatusData: any;
  siteOfflineData: any;
  equptArr: any = [];
  siteId: any = [];
  sourceGetarr: any;
  siteIdget: any;
  equipmentarr: any;
  sourceID: any;
  StatusId: any;
  taskDataOffline: any;
  siteOnly: any = [];
  equpOffline : any=[];
  sourceoffline : any= [];
  filterwithStatus : any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.Offlinelist = JSON.parse(localStorage.getItem('TaskLocal'))
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.equtment = this.offlineMaster.equipment_details;
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.sourceGetarr = this.offlineMaster.source;

    console.log('ionViewDidLoad OfflinetaskfilterPage');
    this.taskDataOffline = JSON.parse(localStorage.getItem('TaskOfflineRawData'))
    console.log(this.taskDataOffline)
  }
  basic() {
    this.navCtrl.push(OfflinetaskcreatePage,{offline:"yes"})
  }
  editTask(item) {
    this.navCtrl.push(OfflinetaskcreatePage, { "page": 'editpage', "itemGet": item })

  }
  onSiteChange(item) {


    this.equptArr = [];
    this.siteId = item;
    for (let i = 0; i < this.equtment.length; i++) {
      if (this.siteId == this.equtment[i].siteId) {

        this.equptArr.push(this.equtment[i]);
      }
    }


  }
  viewtask() {
    this.siteOnly=[];
    this.filterwithStatus=[];
    //  get Site start
 
    if (this.siteIdget) {
      for (let i = 0; i < this.taskDataOffline.length; i++) {
       
        if (this.taskDataOffline[i].Site_Id == this.siteIdget) {
          this.siteOnly.push(this.taskDataOffline[i])
        }

      }
      if(this.siteIdget && this.StatusId){
        console.log(this.StatusId)
       
          for(let z=0;z<this.siteOnly.length;z++){
              // for(let f=0;f<this.StatusId.length;f++){
                if(this.siteOnly[z].Task_Status_ID==this.StatusId){
                  
                  // this.siteOnly.push(this.siteOnly[z])
                  console.log(this.siteOnly[z])
                 this.filterwithStatus.push(this.siteOnly[z])
                }
                else{
                  console.log("no Match")
                }
              // }
            
              
          }
          this.siteOnly=this.filterwithStatus;
          console.log(this.filterwithStatus)
      }
     

    }

    // get site end

    // get Eqipment start

    console.log(this.equipmentarr)
    if (this.siteIdget && this.equipmentarr) {
      this.equpOffline=[];
      for (let x = 0; x < this.siteOnly.length; x++) {
        
        for (let u = 0; u<this.equipmentarr.length; u++) {
       
          if (this.siteOnly[x].Eqp_Plan_ID == this.equipmentarr[u]) {
          
           
            this.equpOffline.push(this.siteOnly[x])
          }
          else{
          
          }
        }
      }
      this.siteOnly=[];
      this.siteOnly=this.equpOffline;
      console.log(this.equpOffline)
       

    }

    //get eqipment end

    if(this.siteIdget && this.sourceID){
      this.sourceoffline=[];
      console.log(this.sourceID)
      console.log(this.equpOffline)
      for (let y = 0; y < this.taskDataOffline.length; y++) {
         
        for (let z = 0; z<this.sourceID.length; z++) {
         console.log(this.taskDataOffline[y].Source_ID) 
          // console.log(this.sourceID[z])
          if (this.taskDataOffline[y].Source_ID == this.sourceID[z]) {
            console.log("Match")
            // console.log(this.equpOffline[y])
          
            this.sourceoffline.push(this.taskDataOffline[y])
            console.log(this.sourceoffline)
            console.log("work")
          }
          else{
             console.log("No match found")
          }
          this.siteOnly=[]
          this.siteOnly=this.sourceoffline;
        }
      }
      
    }
    
     if(this.siteIdget){
       if(this.filterwithStatus.length>0){
        console.log("filter")
        this.siteId='';
        this.equipmentarr='';
        this.sourceID='';
        this.StatusId='';
        this.navCtrl.push(OfflinetasklistPage,{offlineTaskList: this.filterwithStatus})
       }else{
        
        this.siteId='';
        this.equipmentarr='';
        this.sourceID='';
        this.StatusId='';
         console.log("site")
        this.navCtrl.push(OfflinetasklistPage,{offlineTaskList: this.siteOnly})
       }
       
     
     }
     else{
       alert("No filter")
     }

    //  if( this.sourceID){
    //   console.log(this.sourceoffline)
    //   if(this.filterwithStatus.length>0){
    //    console.log("filter")
    //    this.siteId='';
    //    this.equipmentarr='';
    //    this.sourceID='';
    //    this.StatusId='';
    //    this.navCtrl.push(OfflinetasklistPage,{offlineTaskList: this.filterwithStatus})
    //   }else{
    //    this.siteId='';
    //    this.equipmentarr='';
    //    this.sourceID='';
    //    this.StatusId='';
    //     console.log("site")
    //    this.navCtrl.push(OfflinetasklistPage,{offlineTaskList: this.sourceoffline})
    //   }
    
    // }
    // else{
    //   alert("No filter")
    // }

   
  }
}
