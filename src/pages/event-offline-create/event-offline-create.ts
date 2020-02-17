import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfflineaddeventPage } from '../offlineaddevent/offlineaddevent';
import { EventofflinelistPage } from '../eventofflinelist/eventofflinelist';

/**
 * Generated class for the EventOfflineCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-offline-create',
  templateUrl: 'event-offline-create.html',
})
export class EventOfflineCreatePage {
  offlineMaster: any;
  eventStatusData: any;
  siteOfflineData: any;
  Offlinelist: any;
  equptArr: any;
  siteId: any;
  equtment: any;
  equipmentarr: any;
  Status: any;
  siteIdget: any;
  offlineEvent: any = [];
  eventData : any;
  siteArr : any=[];
  statusArr : any=[];
  equpOffline : any=[];
  filterwithStatus : any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Offlinelist = JSON.parse(localStorage.getItem('EventLocal'));
    console.log(this.Offlinelist)
   
  }

  ionViewDidLoad() {
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    console.log(this.offlineMaster)
    this.equtment = this.offlineMaster.equipment_details;
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.eventData=this.offlineMaster.event;
    console.log(this.eventData)

    // event

    console.log('ionViewDidLoad EventOfflineCreatePage');
  }
  add() {
    this.navCtrl.push(OfflineaddeventPage)
  }
  editEvent(item) {
    this.navCtrl.push(OfflineaddeventPage, { page: "editEvent", "itemGet": item })
     console.log(item)
  }
  onSiteChange(item) {
    this.Status='';
    this.equptArr = [];
    this.siteId = item;
    for (let i = 0; i < this.equtment.length; i++) {
      if (this.siteId == this.equtment[i].siteId) {

        this.equptArr.push(this.equtment[i]);
      }
    }
    console.log(this.equptArr)
  }
  view() {
    this.siteArr=[];
    this.equpOffline=[];
    this.statusArr=[];
     this.offlineEvent=[];
 
       if(this.siteIdget){
        for (let i = 0; i < this.eventData.length; i++) {
          if(this.eventData[i].SiteId==this.siteIdget){
            this.siteArr.push(this.eventData[i])
            console.log(this.siteArr)
       
          }
        }
        
        this.offlineEvent=this.siteArr;
        // console.log(this.offlineEvent)
       }
       if (this.siteIdget && this.equipmentarr){

       
        for (let x = 0; x < this.siteArr.length; x++) {
          
          for (let u = 0; u<this.equipmentarr.length; u++) {
       
            if (this.siteArr[x].Eqp_Plan_ID == this.equipmentarr[u]) {
              // console.log("Match")
             
              this.equpOffline.push(this.siteArr[x])
            }
            else{
              // console.log("No match found")
            }
          }
          
        }
        // this.siteOnly=[];
        // this.siteOnly=this.equpOffline;
        if(this.equpOffline){
          this.offlineEvent=this.equpOffline;
        }else{

        }
       
        // console.log(this.equpOffline)
       }
      //  if (this.Status && this.siteIdget) {
         
        
      //   for (let y = 0; y < this.equpOffline.length; y++) {
          
      //     for (let z = 0; z<this.equipmentarr.length; z++) {
       
      //       if (this.equpOffline[y].Event_Status_ID == this.Status[z]) {
      //         console.log("Match")
             
      //         this.statusArr.push(this.equpOffline[y])
      //       }
      //       else{
      //         console.log("No match found")
      //       }
      //     }
          
      //   }
      //   // console.log(this.statusArr)
      //   this.offlineEvent=this.statusArr;
      //  }

        if(this.siteIdget && this.Status || this.siteIdget && this.Status && this.equipmentarr){
           
  
          for(let z=0;z<this.offlineEvent.length;z++){
            // for(let f=0;f<this.Status.length;f++){
              // console.log(this.Status[f])
              console.clear();
              console.log(this.offlineEvent)
              console.log(this.Status)
              this.filterwithStatus=[];
              if(this.offlineEvent[z].Event_Status_ID==this.Status){
                  console.log(this.offlineEvent[z].Task_Status_ID)
                  console.log(this.Status)

                // this.siteOnly.push(this.siteOnly[z])
                console.log(this.offlineEvent[z])
               this.filterwithStatus.push(this.offlineEvent[z]);
               console.log("match")
              }
              else{
              
                console.log("no Match")
              }
            // }
            this.offlineEvent=this.filterwithStatus;
          console.log(this.filterwithStatus)
            
        }



        }


       console.log(this.offlineEvent)
      //  console.log(this.offlineEvent)
       if(this.offlineEvent.length!='0'){
         this.siteIdget='';
         this.Status='';
         this.equipmentarr='';

        this.navCtrl.push(EventofflinelistPage, { "id": this.offlineEvent, "siteId": this.siteIdget })
       }else{
        alert("no Data Found")

       }

  }
}
