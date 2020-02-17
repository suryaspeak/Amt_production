import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditeventlastofflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editeventlastoffline',
  templateUrl: 'editeventlastoffline.html',
})
export class EditeventlastofflinePage {
  arrget : any=[];
  task : any=[];
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
  CauseArr : any;
  JobCodeArr : any;
  taskDescarr : any;
  arrPush: any=[];
  arr : any=[];
  getLocalData : any=[];
  offlineEventData : any=[];
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task= this.navParams.get('idget');
    // this.task =this.task.task;datenew
    for(let i=0;i< this.task.task.length;i++){
      // let ddd= this.arrget[i].task.Date_Notified.slice(0,10)
      let ddd= this.task.task[0].task.Date_Notified=this.task.task[0].task.Date_Notified.slice(0,10)
      console.log(this.task.task[0].task.Date_Notified.slice(0,10))
      this.task.task[i].task.datenew=ddd;
      // this.arrget[i].task.datenew=ddd;
   console.log("work")
     }

   
   
    //   let ddd= this.task.task[0].Date_Notified.slice(0,10)
   
    //  this.task.task[0].datenew=ddd;
     
   
  }

  ionViewDidLoad() {

    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.priorityGet = this.offlineMaster.priority;
    this.activitytwo = this.offlineMaster.activity;
    this.respons = this.offlineMaster.responsibility;
    this.equtment = this.offlineMaster.equipment_details;
     this.taskDescarr= this.offlineMaster.taskstatus
    this.eventPrevention = this.offlineMaster.event_prevention;
    this.ComponentArr= this.offlineMaster.component_code;
     this.modifierCodeArr=    this.offlineMaster.modifier_codes;
     this.taskTypearr    =this.offlineMaster.task_type;
     this.taskcounter =this.offlineMaster.taskcounter;
     this.priorityGet= this.offlineMaster.priority;
     this.sourceGetarr=  this.offlineMaster.source;
     this.symptomgetArr= this.offlineMaster.symptom;
     this.CauseArr= this.offlineMaster.cause;
     this.JobCodeArr=this.offlineMaster.jobcodes;
    console.log('ionViewDidLoad EditeventlastofflinePage');
  }
  submitOnlineEventEdit(){
    var online = 0
       this.getLocalData=JSON.parse(localStorage.getItem('offlineData'))
       console.log(this.getLocalData.event.length)
      //  for(var i=0;i<this.getLocalData.event.length;i++){
        
      //    this.getLocalData.event[i].online
      //    console.log(this.getLocalData.event[i])
        
      // }
       var index= this.getLocalData.event.findIndex(x=>x.Event_ID === this.task.Event_ID)

      
       if(index==-1){
        this.getLocalData.event[index]["offlineedit"] = "false";
       }else{
        this.getLocalData.event[index]=this.task; 
        // this.getLocalData.event[index]={"online":online}
        console.log(this.getLocalData.event)
        var count = Object.keys(this.getLocalData.event[index]).length
        
          this.getLocalData.event[index]["offlineedit"] = "true";
          console.log(this.getLocalData.event[index])
          console.log(this.getLocalData.event)
      
        // localStorage.removeItem('OffineEventData')
        // setTimeout(()=>{  
          localStorage.setItem('offlineData',JSON.stringify(this.getLocalData))     
        console.log(this.getLocalData)
    //  }, 1000);
    alert("Offline Event edit successfully")
    this.navCtrl.setRoot(HomePage);
       
       }
  }

  submit(){
  this.getLocalData=JSON.parse(localStorage.getItem('offlineData'));

  this.getLocalData=[];

      //  offlineData
       if(localStorage.getItem('offlineData')){

        this.getLocalData=JSON.parse(localStorage.getItem('offlineData'));
        var index =  this.getLocalData.findIndex(x=>x.Event_ID === this.task.Event_ID)
        // alert(index)
    
     console.log( this.getLocalData)
         if(index==-1){
      
              let a= this.getLocalData.push(...this.task)
              localStorage.setItem('offlineData',JSON.stringify(a))
         }else{
              console.log(this.getLocalData[index])
              console.log(this.task)
               this.getLocalData[index]=this.task; 
               localStorage.setItem('offlineData',JSON.stringify(this.getLocalData))     
               console.log( this.getLocalData[index])
               
         }


          this.navCtrl.setRoot(HomePage);
             alert("Offline Event edit successfully")

       }
       else{
        alert("Offline Event edit successfully")
        var arr=[];
        console.log(this.task)
        arr.push(this.task)
        console.log(arr)
        localStorage.setItem('OffineEventData',JSON.stringify(arr))
        this.navCtrl.setRoot(HomePage);
       }
      
      
   
    // this.navCtrl.setRoot(HomePage)
    
  }
}
