import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditeventlastofflinePage } from '../editeventlastoffline/editeventlastoffline';

/**
 * Generated class for the EditeventofflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editeventoffline',
  templateUrl: 'editeventoffline.html',
})
export class EditeventofflinePage {
  arr : any;
  Activity : any;
  description : any;
  EquipmentId : any;
  offlineMaster : any;
  Status : any;
  eventStatusData : any;
  siteOfflineData : any;
  priorityGet : any;
  activitytwo : any;
  equtment : any;
  respons  : any;
  priorityidget : any;
  shiftInCharge : any;
  engineerid : any;
  activitytwoget : any;
  HandoverComments: any;
  res_id : any='';
  siteId: any;
  engineerList : any;
  equptArr : any;
  emp_data : any;
  SiftInChargeList : any;
  raisedBy : any;
  upDate : any;
  upTime : any;
  downDate : any;
  downTime : any;
  raisedby: any;
  raisedbyId : any="";
  eventId : any;
  Event_Prevention:any;
  Break_Down:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.arr=this.navParams.get('arr');
   console.log(this.arr.SiteId)
   console.log(this.arr)
  this.res_id=this.arr.downtime[0].Responsibility_ID;

  this.Activity=this.arr.Planned;
  this.description      =this.arr.Description;
  console.log(this.description)
  this.EquipmentId = this.arr.EqpPlan;
   this.activitytwoget=this.arr.Activity_ID;
     this.Status   =this.arr.Event_Status_ID;
     this.priorityidget = this.arr.Priority_ID;
     this.shiftInCharge= this.arr.Shift_in_Charge;
     this.engineerid =this.arr.Assigned_Engineer;
     this.Break_Down=this.arr.Break_Down
     console.log(this.Break_Down)
    //  this.Event_Prevention_ID=this.arr.Event_Prevention_ID
      if(this.arr.Released_By_ID){
        this.raisedbyId=this.arr.Released_By_ID;
      }else{
       this.raisedbyId=''
      }
     

    
     this.siteId=this.navParams.get('siteId')
     if(this.arr.Expected_Up_Time){
      let d= this.arr.Planned_Up_Time.split(" ")
      this.upDate=d[0];
        this.upTime=d[1];
     }
      
       if(this.arr.Planned_Down_Time){
        let names = this.arr.Planned_Down_Time.split(" ");
        this.downDate = names[0];
        this.downTime= names[1];

       }
  
                          // this.arr.event[0].Released_By_ID;
    //  this.engineerid  =   
     this.HandoverComments=this.arr.HandoverComments ;   
    //  this.activitytwoget =  
     if(this.arr.Responsibility_ID)   {
      this.res_id =  this.arr.Responsibility_ID;  
     } else{
      this.res_id='';
     }  
    

      this.onSiteChange(this.siteId)
  }

  ionViewDidLoad() {
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
     console.log(this.offlineMaster)
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.priorityGet = this.offlineMaster.priority;
    this.activitytwo = this.offlineMaster.activity;
    this.respons = this.offlineMaster.responsibility;
    this.equtment = this.offlineMaster.equipment_details;  
  this.Event_Prevention=this.offlineMaster.event_prevention

 
    console.log(this.respons)
     this.priorityGet= this.offlineMaster.priority;

    console.log('ionViewDidLoad EditeventofflinePage');
  }

  onSiteChange(item) {

      this.equptArr = [];
      this.siteId = item;
      this.offlineMaster=JSON.parse(localStorage.getItem('offlineData'));
      this.emp_data = this.offlineMaster.emp_data;
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.arr.SiteId) {
          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by

        }
       
      }
  }
  onEventChange(item) {
   

    // this.Event_Prevention_ID = item;
    // console.log(this.Event_Prevention_ID)
    
  }
  view(){
   
    this.arr.Last_Mod_Date=new Date().toDateString();
    this.arr.Planned_Down_Time=this.downDate+" "+this.downTime
    this.arr.Planned_Up_Time=this.upDate+" "+this.upTime;
     
       console.log(this.arr)
    this.navCtrl.push(EditeventlastofflinePage,{"idget":this.arr})
  }
}
