import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewPage } from '../view/view';
import { RestProvider } from '../../providers/rest/rest';
import { EditeventlastPage } from '../editeventlast/editeventlast';
import { EditattacmentPage } from '../editattacment/editattacment';
import { EditeventlastnewPage } from '../editeventlastnew/editeventlastnew';

/**
 * Generated class for the EditeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editevent',
  templateUrl: 'editevent.html',
})
export class EditeventPage {
  token: any;
    siteData: any;
  siteId: any;
  equipment: any;
  SiftincArr: any;
  eventStatusData: any;
  activitytwo: any;
  priorityGet: any;
  Status: any;
  dataGet: any;
  site: any;
  EquipmentId: any;
  description: any;
  Activity: any;
  downtime: any;
  downdate: any;
  Create_Date: any;
  HandoverComments: any;
  priorityidget: any;
  Responsibility_ID: any;
  respons : any;
  SiftInChargeList : any=[];
  employeeList : any=[];
  Shift_in_Chargeid :any;
  engineerid :any;
  shiftInChargeid : any;
  shiftInCharge : any;
  Assigned_Engineer : any;
  raisedby_id: any="";
  raisedby: any="";
  activitytwoget: any;
  actualdowntime : any;
  downDate : any;
  downTime : any;
  Actual_Up_Time: any;
  upDate: any;
  upTime : any;
  task : any;
  passdata: any;
  res_id: any;
  eqment_idnew: any;
  dataget: any;
  Planned_Up_Time: any;
  Planned_Down_Time :any;
  Actual_Down_Time : any;
  dataallItem : any;
  check: any;
  parts:any=[];
  arrdata:any=[];
  Expected_Up_Time:any;
  EventPrevention:any;
  Prevention:any;
  EventIdPre: any;
  preventionid:any;
  constructor(public loadingCtrl: LoadingController,public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'))
    this.dataget=this.navParams.get('data');
    this.dataallItem=this.navParams.get('dataallItem');
    this.check=this.navParams.get('check')


  
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    // this.token = JSON.parse(localStorage.getItem('menu'))

    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.Prevention(formData).then(data=>{
     
      this.EventPrevention=data['data'].EventPrevention;
      console.log(this.EventPrevention)
    })
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;
      // this.Status

    }).then(()=>{
      this.rest.activity(formData).then(data => {
        this.activitytwo = data['data'].activity;
  
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        loader.dismiss();
      })
    }).then(()=>{
      var formData = new FormData();
      formData.append('token', this.token);
  
  
      this.rest.eventStatus(formData).then(data => {
        this.eventStatusData = data['data'].event_status;
  
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        loader.dismiss();
      })
  
    }).then(()=>{

      this.rest.priorityGet(formData).then(data => {

        this.priorityGet = data['data'].priority;
  
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        loader.dismiss();
      })
    }).then(()=>{
      this.rest.responsibility(formData).then(data => {
        this.respons = data['data'].responsibility;
  
     
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        loader.dismiss();
      })
    }).then(()=>{

      var formData = new FormData();
      formData.append('Event_ID', this.dataget);
      formData.append('token', this.token);
  
      this.rest.AdminEventEditView(formData).then(data => {
        console.log(data['data'].eventEditView.event)
        this.task=data['data'].eventEditView;
        this.description = data['data'].eventEditView.event.Description;
        this.siteId = data['data'].eventEditView.event.SiteId;
        this.EquipmentId = data['data'].eventEditView.event.EqpPlan;
        this.eqment_idnew=data['data'].eventEditView.event.Eqp_Plan_ID;
        this.Create_Date = data['data'].eventEditView.event.Create_Date;
        this.raisedby=data['data'].eventEditView.event.Employee_ID;
        
        console.log(this.raisedby)
        this.Status = data['data'].eventEditView.event.Event_Status_ID;
        this.Prevention=data['data'].eventEditView.event.Event_Prevention_ID
        ;
        console.log(this.Prevention)
        this.HandoverComments = data['data'].eventEditView.event.HandoverComments;
        this.priorityidget = data['data'].eventEditView.event.Priority_ID;
        this.Shift_in_Chargeid=data['data'].eventEditView.event.Shift_in_Charge;
        this.Assigned_Engineer=data['data'].eventEditView.event.Assigned_Engineer;
        this.res_id = data['data'].eventEditView.downtime[0].Responsibility_ID;
        this.raisedby_id=data['data'].eventEditView.event.Released_By_ID;
        this.activitytwoget=data['data'].eventEditView.downtime[0].Activity_ID;
        this.Actual_Up_Time=data['data'].eventEditView.event.Actual_Up_Time;
        this.Actual_Down_Time=data['data'].eventEditView.event.Actual_Down_Time;
        this.Planned_Up_Time=data['data'].eventEditView.event.Planned_Up_Time;
        this.Planned_Down_Time=data['data'].eventEditView.event.Planned_Down_Time;
        // surya
        this.Expected_Up_Time=data['data'].eventEditView.event.Expected_Up_Time;

        // this.parts=data['data'].eventEditView.task.task_relation.taskOperationParts;
        console.log(data)
        if (data['data'].eventEditView.event.Planned == "1") {
          this.Activity = 0
        }
        else {
          this.Activity = 1
        }

      }).catch((err=>{
        this.navCtrl.pop();
        loader.dismiss();
      })).then(()=>{
       
    console.log(this.Actual_Up_Time,this.Actual_Down_Time,
      this.Planned_Up_Time,  this.Planned_Down_Time
      )

        if(this.Status=="3"){
         
          if(this.Actual_Up_Time){
            let ac=this.Actual_Up_Time.split(" ");
            this.upDate=ac[0];
            this.upTime=ac[1];
          }
         
          else{
          
            let ac=this.Actual_Up_Time.split(" ");
            this.upDate=ac[0];
            this.upTime=ac[1];
          }
         }



         else if(this.Status== "2" ){
     
          this.actualdowntime=this.Actual_Down_Time;
          if(this.actualdowntime){
            let names = this.actualdowntime.split(" ");
          this.downDate = names[0];
          this.downTime= names[1];
         
          let d= this.Expected_Up_Time.split(" ")
          this.upDate=d[0];
            this.upTime=d[1];
       
          }
          else{
          
           
            let ac=this.actualdowntime.split(" ");
            this.upDate=ac[0];
            this.upTime=ac[1];
  
           
           }
     
         
        }

         else{
       
          this.Actual_Up_Time=this.Planned_Up_Time;
  
          this.actualdowntime=this.Planned_Down_Time;
          if(this.actualdowntime){
           let names = this.actualdowntime.split(" ");
           this.downDate = names[0];
           this.downTime= names[1];
          }
          else{
           this.actualdowntime=this.Planned_Up_Time;
           let ac=this.actualdowntime.split(" ");
           this.upDate=ac[0];
           this.upTime=ac[1];
          }
          if(this.Actual_Up_Time){
            let ac=this.Actual_Up_Time.split(" ");
            this.upDate=ac[0];
            this.upTime=ac[1];
          }
           else{
            this.Actual_Up_Time=this.Planned_Up_Time;
            let ac=this.Actual_Up_Time.split(" ");
            this.upDate=ac[0];
            this.upTime=ac[1];
           }
  
         }
    }).then(data=>{

    
      formData.append('Site_Id', this.siteId);
      this.rest.employee(formData).then(data => {
      
        
        this.SiftincArr = data['data'].employee;
        console.log(this.SiftincArr)
        for (let x = 0; x < this.SiftincArr.length; x++) {
       
          if (this.SiftincArr[x].emp_type === "Shift-in-Charge") {
            this.SiftInChargeList.push(this.SiftincArr[x])

          }
  
          if (this.SiftincArr[x].emp_type === "Service Engineer") {
            this.employeeList.push(this.SiftincArr[x])
            // this.SiftincArr = this.SiftincArr[x];
  
          }
          else {
            console.log("No Data Found")
          }
        
        }
        this.shiftInCharge=this.Shift_in_Chargeid;
        this.engineerid=this.Assigned_Engineer;
        this.raisedby=this.raisedby_id;
       
      }).catch(()=>{
        loader.dismiss();
      })
      loader.dismiss();
    })

    })




  

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
  }
  onEventChange(item){
    this.EventIdPre=item;
  }
  view() {
    if(this.engineerid &&this.Status &&this.priorityidget && this.shiftInCharge ){


   
console.log(this.shiftInCharge)

if(this.shiftInCharge){

}
else{
  this.shiftInCharge="0";
}
if(this.engineerid){
   
}
else{
  this.engineerid="0"
}
if(this.Prevention){
   this.arrdata=[{
    'Break_Down':this.Activity,
    "Event_ID": this.navParams.get('data'),
  
    'siteId':this.siteId,
    
    'Eqp_Plan_ID':this.eqment_idnew,
    
    'Event_Description':this.description,
    
    'Planned_Down_Time':this.downDate  + this.downTime,
  
    
    'Planned_Up_Time':this.upDate + this.upTime,
   
    'responsibility_ID':this.res_id,
    'raisedby':this.raisedby,
    
    'createdDate':this.Create_Date,
    
    'event_status':this.Status,
    
    'Priority_ID':this.priorityidget,
    
    'ShiftIncharge':this.shiftInCharge,
    
    'Engineer':this.engineerid,
    
    'HandoverComments':this.HandoverComments,
    
    'activity_ID':this.activitytwoget,
    "EventPrv": this.Prevention
    // 'priorityget':this.priorityidget
  }
  ]
}
else{
   this.arrdata=[{
    'Break_Down':this.Activity,
    "Event_ID": this.navParams.get('data'),
  
    'siteId':this.siteId,
    
    'Eqp_Plan_ID':this.eqment_idnew,
    
    'Event_Description':this.description,
    
    'Planned_Down_Time':this.downDate  + this.downTime,
  
    
    'Planned_Up_Time':this.upDate + this.upTime,
   
    'responsibility_ID':this.res_id,
    'raisedby':this.raisedby,
    
    'createdDate':this.Create_Date,
    
    'event_status':this.Status,
    
    'Priority_ID':this.priorityidget,
    
    'ShiftIncharge':this.shiftInCharge,
    
    'Engineer':this.engineerid,
    
    'HandoverComments':this.HandoverComments,
    
    'activity_ID':this.activitytwoget,
   
    // 'priorityget':this.priorityidget
  }
  ]
}

 
  if(this.check==true){
    this.navCtrl.push(EditeventlastnewPage, { arr: this.task ,passdata:this.arrdata})

  }
  else{
    this.navCtrl.push(EditeventlastPage, { arr: this.task ,passdata:this.arrdata})

  }
}else{
alert("fill all mandatory fields")
}
    }
}
