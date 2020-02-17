import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfflineworkflowPage } from '../offlineworkflow/offlineworkflow';

/**
 * Generated class for the OfflineaddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlineaddevent',
  templateUrl: 'offlineaddevent.html',
})
export class OfflineaddeventPage {
  offlineMaster: any;
  siteOfflineData: any;
  eventStatusData: any;
  priorityGet: any;
  EquipmentId: any;
  Status: any;
  activitytwo: any;
  respons: any;
  description: any;
  responsId: any;
  uptime: any;
  priority: any;
  downdate: any;
  downtime: any;
  allDataPass: any = [];
  Handovercomments: any;
  update: any;
  activitytwoget: any;
  siteId: any;
  emp_data: any;
  engineerList: any;
  SiftInChargeList: any;
  raisedBy: any;
  equtment: any;
  equptArr: any = [];
  evPriv: any;
  eventPrevention: any;
  shiftInCharge: any;
  engineer: any;
  plaBreak: any;
  editData : any;
  pageCheck:boolean= false;
  evnPr : any="";
  localevent_id: any="";
  today:any;
  Event_Prevention_ID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.raisedBy=this.navParams.get('raisedBy');
    this.today = new Date();
    var dd = this.today.getDate();
    
    var mm = this.today.getMonth()+1; 
    var yyyy = this.today.getFullYear();
    var hh=this.today.getHours();;
    var mm=this.today.getMinutes()

    var today = new Date().toISOString().split("T")[0];
    this.downdate=today;
    let ddd = this.downdate.split('-');
    let firstName = ddd[0];
    let sen = ddd[1];
    let last = ddd[2]
    
    let filan = ddd[0] + "-" + ddd[1] + "-" + ddd[2]
    this.downdate=filan
      
    this.downdate =filan;
   
    this.downtime= hh+':'+mm;
   
  }

  ionViewDidLoad() {
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.priorityGet = this.offlineMaster.priority;
    this.activitytwo = this.offlineMaster.activity;
    this.respons = this.offlineMaster.responsibility;
    this.equtment = this.offlineMaster.equipment_details;
    this.eventPrevention = this.offlineMaster.event_prevention;

    console.log(this.eventPrevention)
 
   
   if(this.navParams.get('page')){
     this.pageCheck=true;
     this.editData=this.navParams.get('itemGet')
     console.log(this.editData)
     this.plaBreak=this.editData.Break_Down;
     this.downdate=this.editData.Planned_Down_Time.substring(0,10);
     this.downtime=this.editData.Planned_Down_Time.substring(10,15);
     this.update=this.editData.Planned_Up_Time.substring(0,10);
     this.uptime=this.editData.Planned_Up_Time.substring(10,15);
     this.siteId=this.editData.Site_Id;
     
     this.description=this.editData.Event_Description;
     this.Status= this.editData.event_status;
     this.priority=this.editData.Priority_ID;
     this.onSiteChange(this.editData.Site_Id)
      this.activitytwoget=this.editData.activity_ID;
      this.shiftInCharge =this.editData.ShiftIncharge;
      this.localevent_id=this.editData.localevent_id;
      this.engineer= this.editData.Engineer;
      this.responsId= this.editData.responsibility_ID;
      this.Handovercomments=this.editData.HandoverComments;
      this.Event_Prevention_ID=this.editData.Event_Prevention_ID
      console.log(this.Event_Prevention_ID)
      console.log(this.editData.Event_Prevention_ID)
      // this.raisedById=this.localData.RaisedByID;
  

    //  console.log(this.editData.activity_ID)
  
    // .substring(0,10);
        console.log(this.downdate)
    console.log("come edit page")
   }else{
     this.pageCheck=false;
     console.log("come otherpage")
   }
    console.log('ionViewDidLoad OfflineaddeventPage');
  }
  
  onPlaChange() {
   
    this.evPriv = '';
  }
  onEventChange(item) {
   

    this.Event_Prevention_ID = item;
    console.log(this.Event_Prevention_ID)
    
  }
  onSiteChange(item) {
    if(this.navParams.get('page')){

      this.equptArr = [];
      this.siteId = item;
      for (let i = 0; i < this.equtment.length; i++) {
        if (this.siteId == this.equtment[i].siteId) {
  
          this.equptArr.push(this.equtment[i]);
        }
      }
      console.log(this.equptArr)
 
        for(let z=0;z<this.equptArr.length;z++){
          if(this.equptArr[z].eqp_id==this.editData.Eqp_Plan_ID){

            this.EquipmentId=this.equptArr[z];
          
            
          }else{
            console.log("no data found")
          }
        }
            console.log(this.EquipmentId)
      
        console.log(this.offlineMaster.emp_data)
  
      this.emp_data = this.offlineMaster.emp_data;
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.siteId) {
          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by
        
        }
       
      }
      console.log(this.engineerList)
  
    }else{
      this.equptArr = [];
      this.siteId = item;
      for (let i = 0; i < this.equtment.length; i++) {
        if (this.siteId == this.equtment[i].siteId) {
  
          this.equptArr.push(this.equtment[i]);
        }
      }
  
      this.emp_data = this.offlineMaster.emp_data;
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.siteId) {
          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by

        }
       
      }
   
    }
    
  }
  Continue() {
    if (this.siteId && this.EquipmentId && this.description
      && this.uptime && this.downtime && this.Status && this.priority
      && this.activitytwo && this.shiftInCharge && this.engineer && this.responsId){

          console.log("work")
          if (this.pageCheck=false) {
            
            console.log(this.activitytwoget)
            console.log("create")
            // alert(this.evPriv)
            this.allDataPass = [{
              "siteId": this.siteId,
              "Placebreakdown": this.plaBreak,
              "EqpuName":this.EquipmentId.eqp_name,
              "localevent_id":this.localevent_id,
              "EquipmentId": this.EquipmentId.eqp_id,
              "description": this.description,
              "uptime": this.update + this.uptime,
              "downtime": this.downdate + this.downtime,
              "Status": this.Status,
              "priority": this.priority, 
             
              "Activity": this.activitytwoget,
              "shiftInCharge": this.shiftInCharge,
              "engineer": this.engineer,
              "responsableId": this.responsId,
              "Handovercomments": this.Handovercomments,
              "Event_Prevention_ID": this.Event_Prevention_ID
      
            }]
            console.log(this.allDataPass)
            this.navCtrl.push(OfflineworkflowPage, { "raisedBy": this.raisedBy, "PassAllData": this.allDataPass,"passAllLocal":this.navParams.get('itemGet') })
          
          }
          else {
            // edit block
            console.log("edit")
            console.log(this.Event_Prevention_ID)
            console.log(this.activitytwoget)
            this.allDataPass = [{
              "siteId": this.siteId,
              "Placebreakdown": this.plaBreak, 
              "EqpuName":this.EquipmentId.eqp_name,
              "EquipmentId": this.EquipmentId.eqp_id,
              "description": this.description,
              "uptime": this.update + this.uptime,
              "downtime": this.downdate + this.downtime,
              "Status": this.Status,
              "priority": this.priority,
              "Activity": this.activitytwoget,
              "shiftInCharge": this.shiftInCharge,
              "engineer": this.engineer,
              "responsableId": this.responsId,
              "Handovercomments": this.Handovercomments,
              "localevent_id":this.localevent_id,
              "Event_Prevention_ID": this.Event_Prevention_ID
      
            }]
            console.log(this.Event_Prevention_ID)
            console.log(2)
            console.log(this.allDataPass)
            // alert(this.navParams.get('page'))
            this.navCtrl.push(OfflineworkflowPage, { "raisedBy": this.raisedBy, "PassAllData": this.allDataPass,"passAllLocal":this.navParams.get('itemGet'),"page":this.navParams.get('page') })
            // this.navCtrl.push(WorkorderPage, { "PassAllData": this.allDataPass })
          }
          
      }
      else{
        alert("Please fill all the mandatory fields")
      }
//  create block
  

  }
}
