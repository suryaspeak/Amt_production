import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the OfflinetaskdetilsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlinetaskdetils',
  templateUrl: 'offlinetaskdetils.html',
})
export class OfflinetaskdetilsPage {
  offlineMaster : any;
  eventStatusData : any;
  siteOfflineData : any;
  priorityGet : any;
  activitytwo : any;
  respons : any;
  equtment : any;
  eventPrevention : any;
  ComponentArr : any;
  modifierCodeArr : any;
  taskTypearr : any;
  taskcounter : any;
  sourceGetarr : any;
  symptomgetArr : any;
  JobCodeArr : any;
  CauseArr : any;
  equptArr : any;
  emp_data : any;
  idGet : any=[];
  engineerList : any;
  SiftInChargeList : any;
  siteId : any;
  raisedBy : any;
  EquipmentId : any;
  Description : any;
  Componentcode : any;
  Modifiercode : any;
  Tasktype : any;
  priorityid : any;
  Date_Notified : any;
  sourceId : any;
  Task_Operation : any;
  Work_Order : any;
  Expected_Duration: any;
  Expected_Labor_Hours : any;
  Symptom_ID : any;
  Cause_ID : any;
  JobCode_id : any;
  repairDesc : any;
  Labour_Qty : any;
  RaisedByID : any;
  raiseByArr : any=[];
  TaskData : any =[];
  getLocalData : any;
  taskId : any;
  Application_Code_ID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.idGet=this.navParams.get('id');
   console.log(this.idGet)
   this.Application_Code_ID=this.idGet.Application_Code_ID
   console.log(this.Application_Code_ID)
   this.Date_Notified= this.idGet.Date_Notified.substring(0,10);
   this.onSiteChange(this.siteId)
this.siteId= this.idGet.Site_Id;
   console.log(this.siteId)
  }

  ionViewDidLoad() {
    console.log("asdfffffffffffsaf")
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    console.log( this.offlineMaster)
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.priorityGet = this.offlineMaster.priority;
    this.activitytwo = this.offlineMaster.activity;
    this.respons = this.offlineMaster.responsibility;
    this.equtment = this.offlineMaster.equipment_details;
    this.eventPrevention = this.offlineMaster.event_prevention;
    this.ComponentArr= this.offlineMaster.component_code;
     this.modifierCodeArr=    this.offlineMaster.modifier_codes;
     this.taskTypearr    =this.offlineMaster.task_type;
     this.taskcounter =this.offlineMaster.taskcounter;
     console.log(this.taskcounter)
    //this.priorityGet= this.offlineMaster.priority;
     this.sourceGetarr=  this.offlineMaster.source;
     this.symptomgetArr= this.offlineMaster.symptom;
     this.CauseArr= this.offlineMaster.cause;
     this.JobCodeArr=this.offlineMaster.jobcodes;
    
    console.log('ionViewDidLoad OfflinetaskdetilsPage');
  }
  onSiteChange(item) {
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.equtment = this.offlineMaster.equipment_details;
      this.equptArr = [];
      this.siteId = item;
   
      for (let i = 0; i < this.equtment.length; i++) {
        if (this.siteId == this.equtment[i].siteId) {
  
          this.equptArr.push(this.equtment[i]);
        }
      }
  
      this.emp_data = this.offlineMaster.emp_data;
  
      console.log(this.emp_data);
      
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.idGet.Site_Id) {

          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by;
          console.log(this.emp_data[x].raised_by)
           

        }
       
      }
        console.log(this.raisedBy)
    
   
    }
    
    submit (){
      

    //  this.TaskData=[{
    //     "id":this.siteId,
    //     "Task_ID":this.taskId,
    //     "Modifier_ID": this.Modifiercode,
    //     "Priority_ID": this.priorityid ,
    //     "Task_Operation":this.Task_Operation,
    //     "Work_Order":this.Work_Order,
    //     "Task_Type_ID": this.Tasktype,
    //     "Component_Code_ID":this.Componentcode,
    //     "createdDate": new Date().toDateString(),
    //     "task_desc":this.Description,
    //     "Source_ID":this.sourceId,
    //     "Date_Notified": this.Date_Notified,
    //     "Symptom_ID": this.Symptom_ID,
    //     "Cause_ID":this.Cause_ID,
    //     "Repair_Notes":this.repairDesc,
    //     "Expected_Duration":this.Expected_Duration,
    //     "Labour_Qty":this.Labour_Qty,
    //     "Expected_Labor_Hours":this.Expected_Labor_Hours,
    //     "RaisedByID":this.RaisedByID,
    //     "Job_Code_Id":this.JobCode_id
   

    //   }]
        
///online data offline edit
     

       this.idGet["offlineedit"] = "true";
       console.log(this.idGet)
       var localTaskData=JSON.parse(localStorage.getItem('TaskOfflineRawData'))

       var index =localTaskData.findIndex(x=>x.id === this.idGet.id)
    console.log(index)
       if(index==-1){
          alert("Something went wrong")
       }else{
        localTaskData.splice(index, 1);   
        let a= localTaskData.concat(this.idGet)
        console.log(a)
       console.log(a.length)
       

       
        localStorage.setItem("TaskOfflineRawData",JSON.stringify(a))
        alert("Offline Task Edit Successfully")
        this.navCtrl.setRoot(HomePage);
       }

        // if(localStorage.getItem('editTaskOnlineData')){
            
        //   this.getLocalData=JSON.parse(localStorage.getItem('editTaskOnlineData'));
        //   console.log(this.getLocalData); 
        //    console.log(this.TaskData)
        //      let a= this.getLocalData.concat(this.TaskData)
        //      localStorage.setItem('editTaskOnlineData',JSON.stringify(a))
        //        console.log(a)
        //        this.navCtrl.setRoot(HomePage);
        //        alert("Offline Task edit successfully")
        // }else{
        //   this.navCtrl.setRoot(HomePage);
        //   alert("Offline Task edit successfully")
        //   localStorage.setItem('editTaskOnlineData',JSON.stringify(this.TaskData))
        // }
      
    }

}
