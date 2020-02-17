import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the OfflineworkflowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlineworkflow',
  templateUrl: 'offlineworkflow.html',
})
export class OfflineworkflowPage {
  taskDescription : any;
  ComponentArr : any;
  offlineMaster : any;
  taskTypearr : any;
  modifierCodeArr : any;
  ports : any;
  taskDescarr : any;
  sourceGetarr : any;
  symptomgetArr : any;
  CauseArr : any;
  JobCodeArr : any;
  raisedBy : any=[];
  raisedById : any;
  EstimatedTotaldurationhrs:any="0";
  PassAllDataGet : any;
  tasktypeId: any;
  Componentcode : any;
  Task_Status_ID: any;
  Modifiercode :any;
  Estimatedlabourqty : any;
  sourceId : any;
  datenotified : any;
  TaskCounter : any;
  Estimatedlabourhrs : any;
  Symptom :any;
  Cause :any;
  JobCode :any;
  repairDesc : any;
  getLocalData : any=[];
  arrOfflineEventCreate: any=[];
  usrData : any=[];
  offlineData: any;
  localData : any;
  Expected_Labor_Hours:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.PassAllDataGet=this.navParams.get('PassAllData');
    console.log(this.PassAllDataGet)
    this.raisedBy=this.navParams.get('raisedBy');
  



    if(this.navParams.get('passAllLocal')){
      this.localData=this.navParams.get('passAllLocal')

      console.log(this.localData)
      // this.offlineData=JSON.parse(localStorage.getItem('task_desc'))
      this.repairDesc=this.localData.task_desc;
      this.Componentcode=this.localData.Component_Code_ID;
      this.taskDescription=this.localData.task_desc;
      this.Modifiercode=this.localData.Modifier_ID;
      this.tasktypeId=this.localData.Task_Type_ID;
      this.TaskCounter =this.localData.task_counter;
      this.Task_Status_ID=this.localData.taskstatus;
      this.datenotified=this.localData.Date_Notified;
      this.EstimatedTotaldurationhrs=this.localData.Expected_Duration;
      this.Estimatedlabourqty= this.localData.Estimatedlabourqty;
      this.Expected_Labor_Hours=this.localData.Expected_Labor_Hours;
      this.raisedById=this.localData.RaisedByID;
      this.sourceId=this.localData.Source_ID;
      this.Symptom=this.localData.Symptom_ID;
      this.Cause=this.localData.Cause_ID;
      this.JobCode=this.localData.Job_Code_Id;
      this.repairDesc=this.localData.Repair_Notes;

      console.log(this.datenotified)

    }else{
    }
    this.offlineMaster=JSON.parse(localStorage.getItem('offlineData'));
    this.ComponentArr=this.offlineMaster.component_code;
    this.modifierCodeArr   =this.offlineMaster.modifier_codes;
    this.taskTypearr=this.offlineMaster.task_type;
    this.ports=this.offlineMaster.taskcounter;
    this.taskDescarr= this.offlineMaster.taskstatus;
    this.sourceGetarr  = this.offlineMaster.source;
    this.symptomgetArr =this.offlineMaster.symptom;
    this.CauseArr= this.offlineMaster.cause;
    this.JobCodeArr= this.offlineMaster.jobcodes;
   
    // this.repairDesc=this.offlineData.task_desc;
    
   
 
  }

  ionViewDidLoad() {
  

    console.log('ionViewDidLoad OfflineworkflowPage');
  }


  subMit(){
    // alert(this.navParams.get('page'))
    // console.log(this.datenotified)
    // console.log(
    //   this.taskDescription,
    //   this.tasktypeId,
    //   this.Componentcode,
    //   this.Modifiercode,
    //   this.TaskCounter,
    //   this.Task_Status_ID,
    //    this.datenotified,
    //   this.EstimatedTotaldurationhrs,
    //   this.Estimatedlabourqty,
    //   this.Estimatedlabourhrs,
    //   this.raisedById,
    //   this.sourceId,
    //   this.Symptom,
    //   this.Cause,
    //   this.JobCode,
    //   this.repairDesc
    // )
    
    if( this.navParams.get('page')){
    
      console.log(this.navParams.get('page'))
      this.arrOfflineEventCreate=
      [{
        "localevent_id":this.PassAllDataGet[0].localevent_id,
        "Site_Id":  this.PassAllDataGet[0].siteId,
        "Eqp_Plan_ID":this.PassAllDataGet[0].EquipmentId,
        "EqpuName": this.PassAllDataGet[0].EqpuName,
        "Event_Description":this.PassAllDataGet[0].description,
        "Priority_ID":this.PassAllDataGet[0].priority,
        "event_status":this.PassAllDataGet[0].Status,
        "Break_Down":this.PassAllDataGet[0].Placebreakdown,
        "Planned_Down_Time" :  this.PassAllDataGet[0].downtime,
        "Planned_Up_Time":this.PassAllDataGet[0].uptime,
        "createdDate" : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
        "ShiftIncharge": this.PassAllDataGet[0].shiftInCharge,
        "Engineer": this.PassAllDataGet[0].engineer,
        "HandoverComments":this.PassAllDataGet[0].Handovercomments,
        "Task_Type_ID":this.tasktypeId,
        "Component_Code_ID":this.Componentcode,
        "task_desc":this.taskDescription,
        "Modifier_ID":this.Modifiercode,
        "Source_ID": this.sourceId,
        "Date_Notified":this.datenotified,
        "Symptom_ID":this.Symptom,
        "Cause_ID":this.Cause,
        "Repair_Notes": this.repairDesc,
        "Expected_Duration": this.EstimatedTotaldurationhrs,
        "Expected_Labor_Hours":this.Expected_Labor_Hours,
        "Estimatedlabourqty":this.Estimatedlabourqty,
        "RaisedByID":this.raisedById,
        "Repair_Code_Id": this.raisedById,
        "activity_ID":this.PassAllDataGet[0].Activity,  
        "responsibility_ID":this.PassAllDataGet[0].responsableId,
        "task_counter":this.TaskCounter,
        "Job_Code_Id" :  this.JobCode,
        "taskstatus" :this.Task_Status_ID,
        "Event_Prevention_ID":this.PassAllDataGet[0].Event_Prevention_ID,
      }]
      this.getLocalData=JSON.parse(localStorage.getItem('EventLocal'));
     
     
      var index =  this.getLocalData.findIndex(x=>x.localevent_id === this.arrOfflineEventCreate[0].localevent_id)
    console.log(this.arrOfflineEventCreate)
    if(index==-1){ 
      alert("something went wrong..")

    }else{
      // this.getLocalData[index]=""
      this.getLocalData.splice(index, 1);
      
      console.log(this.getLocalData[index])
      // this.getLocalData.push(...this.arrOfflineEventCreate[0])
      let a= this.getLocalData.concat(this.arrOfflineEventCreate[0])
      console.log(a)
      console.log(this.arrOfflineEventCreate[0])
      localStorage.setItem("EventLocal",JSON.stringify(a))
      alert("Offline Event Edit Successfully")
      this.navCtrl.setRoot(HomePage)
    }
 
    }
    else{
      console.log("offline")
      console.log(this.PassAllDataGet)
      this.arrOfflineEventCreate=
      [{
        "localevent_id":Math.floor(Math.random() * 69999999) + 1,
        "Site_Id":  this.PassAllDataGet[0].siteId,
        "Eqp_Plan_ID":this.PassAllDataGet[0].EquipmentId,
        "EqpuName": this.PassAllDataGet[0].EqpuName,
        "Event_Description":this.PassAllDataGet[0].description,
        "Priority_ID":this.PassAllDataGet[0].priority,
        "event_status":this.PassAllDataGet[0].Status,
        "Break_Down":this.PassAllDataGet[0].Placebreakdown,
        "Planned_Down_Time" :  this.PassAllDataGet[0].downtime,
        "Planned_Up_Time":this.PassAllDataGet[0].uptime,
        "createdDate" : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
        "ShiftIncharge": this.PassAllDataGet[0].shiftInCharge,
        "Engineer": this.PassAllDataGet[0].engineer,
        "HandoverComments":this.PassAllDataGet[0].Handovercomments,
        "Task_Type_ID":this.tasktypeId,
        "Component_Code_ID":this.Componentcode,
        "task_desc":this.taskDescription,
        "Modifier_ID":this.Modifiercode,
        "Source_ID": this.sourceId,
        "Date_Notified":this.datenotified,
        "Symptom_ID":this.Symptom,
        "Cause_ID":this.Cause,
        "Repair_Notes": this.repairDesc,
        "Expected_Duration": this.EstimatedTotaldurationhrs,
        "Expected_Labor_Hours":this.Expected_Labor_Hours,
        "Estimatedlabourqty":this.Estimatedlabourqty,
        "RaisedByID":this.raisedById,
        "Repair_Code_Id": this.raisedById,
        "activity_ID":this.PassAllDataGet[0].Activity,  
        "responsibility_ID":this.PassAllDataGet[0].responsableId,
        "task_counter":this.TaskCounter,
        "Job_Code_Id" :  this.JobCode,
        "taskstatus" :this.Task_Status_ID,
        "Event_Prevention_ID":this.PassAllDataGet[0].Event_Prevention_ID,
      }]
      console.log(this.arrOfflineEventCreate)
        alert("Offline Event Create Successfully")
        if(localStorage.getItem('EventLocal')){
          this.getLocalData=JSON.parse(localStorage.getItem('EventLocal'));
          let a= this.arrOfflineEventCreate.concat(this.getLocalData)
     
          localStorage.setItem("EventLocal",JSON.stringify(a))
  
          this.navCtrl.setRoot(HomePage)
        }else{
          localStorage.setItem("EventLocal",JSON.stringify(this.arrOfflineEventCreate))
          this.navCtrl.setRoot(HomePage)
        }
      
  

    }


   
    
  }
}
