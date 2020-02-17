import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
/**
 * Generated class for the EditeventlastnewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editeventlastnew',
  templateUrl: 'editeventlastnew.html',
})
export class EditeventlastnewPage {
  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];
  arrget:any;
  shownGroup = null;
  token: any;
  hide:boolean=false;
  statusget: any;

  // new value


  Componentcode: any;
  Modifiercode: any;
  Tasktype: any;
  TaskCounter: any;
  Priority: any;
  ComponentArr: any;
  modifierCodeArr: any;
  partsarr: any;
  sourceId: any;
  taskTypearr: any;
  sourceGetarr: any;
  symptomgetArr: any;
  taskstatus: any;
  raisedBy: any;
  datenotified: any;
  imageURIShop: any = "";
  imageURIShop2: any = "";
  imageURIShop3: any = "";
  imageURIShop4: any = "";
  CauseArr: any;
  Cause: any;
  JobCodeArr: any;
  JobCode: any;
  repairDesc: any;
  Symptom: any;
  EstimatedTotaldurationhrs: any;
  Estimatedlabourqty: any;
  Estimatedlabourhrs: any;
  reseby: any;
  ports: any;
  SiftincArr: any;
  partsId: any;
  rmchecked: any;
  SearchValue:any;
  temp:any;
  passdata: any;
  taskcounterArr : any;
  taskDescarr : any=[];
  check : any;
  constructor(public loadingCtrl: LoadingController,public rest: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.arrget=this.navParams.get('arr').task;
   this.passdata=this.navParams.get('passdata');
    this.check=this.navParams.get('check')
   console.clear()
  console.log(this.check)
  
   for(let i=0;i<this.arrget.length;i++){
   let ddd= this.arrget[i].task.Date_Notified.slice(0,10)
  
   console.log(ddd[0])
   console.log(ddd)
   this.arrget[i].task.datenew=ddd;
  
  }
  
   
  }

  ionViewDidLoad() {
    this.token=JSON.parse(localStorage.getItem('menu'))
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.ComponentCodesAll(formData).then(data => {
      this.ComponentArr = data['data'].component;

      // this.Componentcode = this.ComponentArr[1314];
      

    }).catch(err=>{
      alert("Service is down..Try after some time")
      this.navCtrl.pop();
      loader.dismiss();
    })
    
    .then(()=>{


      this.rest.modifierCodes(formData).then(data => {

        this.modifierCodeArr = data['data'].modifier_codes;
        
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        loader.dismiss();
      }).then(()=>{
        this.rest.taskType(formData).then(data => {
  
          this.taskTypearr = data['data'].task_type;
    
          console.log(this.taskTypearr)
          this.temp=this.arrget[0].task.Task_Type_ID;
         
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })
      }).then(()=>{

        this.rest.sourceGet(formData).then(data => {
  
          this.sourceGetarr = data['data'].source
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })

      }).then(()=>{

        this.rest.causeGet(formData).then(data => {
  
          this.CauseArr = data['data'].cause
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })
      }).then(()=>{
        this.rest.jobCodesGet(formData).then(data => {
  
          this.JobCodeArr = data['data'].job_codes
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })
      }).then(()=>{
        this.rest.symptomGet(formData).then(data => {
  
          this.symptomgetArr = data['data'].symptom
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })
  
      }).then(()=>{
        this.rest.TaskStatus(formData).then(data=>{
          this.taskstatus=data['data'].taskstatus;
          for(let i=0;i<this.taskstatus.length;i++){
            if(this.taskstatus[i].Description=="In Progress"
            || this.taskstatus[i].Description=="Completed"
            || this.taskstatus[i].Description=="Yet To Start" 
            || this.taskstatus[i].Description=="Deferred"                                  
            
            ){
                 this.taskDescarr.push(this.taskstatus[i])
            }
            else{
              console.log(this.taskstatus[i])
            }
        }
       
          console.log(data)
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          loader.dismiss();
        })
      }).then(()=>{

        this.rest.applicationCode(formData).then(data => {
  
  
          this.taskcounterArr = data['data'].applicationcodes;
        
    
        }).catch(err=>{
          alert("Server is down.Please try after some time..");
          this.navCtrl.pop();
          loader.dismiss();
        })
      })

    }).then(()=>{
      loader.dismiss();
    })
  }

submit(){
  const loader = this.loadingCtrl.create({
    content: "Please wait...",

  });
  // this.arrget.push(...this.passdata);
  console.log(this.arrget);
  var formData = new FormData();
  formData.append('token', this.token);
  
  formData.append('eventEditSave',JSON.stringify(this.arrget));
  formData.append('eventDetail',JSON.stringify(this.passdata));
  

  

  this.rest.eventEditAdmin(formData).then(data=>{
    alert(data['data'].event_notification)
    loader.dismiss();
    this.navCtrl.setRoot(HomePage)
    // console.log(data['data'].event_notification)
  })



 
} 

}
