import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { JobPage } from '../job/job';
import { WorkorderPage } from '../workorder/workorder';
import { ViewFlags } from '@angular/compiler/src/core';
import { ViewPage } from '../view/view';
import { EventPage } from '../event/event';
import { RestProvider } from '../../providers/rest/rest';
import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  @ViewChild(Navbar) navBar: Navbar;
  token: any;
  siteData: any;
  equipment: any;
  description: any;
  uptime: any;
  downtime: any;
  Status: any;
  priority: any = "2";
  activity: any;
  activitytwo: any;
  eventStatusData: any;
  priorityGet: any;
  siteId: any;
  EquipmentId: any;
  Activity: any;
  shiftInCharge: any;
  engineer: any;
  Handovercomments: any='';
  downdate: any;
  update: any;
  activitytwo_id: any;
  SiftincArr: any;
  raisedby: any;
  activitytwoget: any;
  partsarr: any;
  respons: any;
  responsId: any;
  employeeList: any = [];
  SiftInChargeList:any=[];
  today: any;
  EventPrevention : any=[];
   EventIdPre: any;
   allDataPass : any=[];
  constructor(public network:Network,public loadingCtrl:LoadingController,public alertCtrl: AlertController,public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.token = JSON.parse(localStorage.getItem('menu'))
   
    if(this.network.type!="none"){
      const loader = this.loadingCtrl.create({
        content: "please wait...",
  
      });
      loader.present();
  
  
  
  
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
     
  
      var formData = new FormData();
      formData.append('token', this.token);
      this.rest.siteGet(formData).then(data => {
        this.siteData = data['data'].site;
      }).catch(err=>{
        alert("Server is down.please try after some time..");
        this.navCtrl.pop();
        loader.dismiss();
      }).then(()=>{
         //get Status
  
      this.rest.eventStatus(formData).then(data => {
        this.eventStatusData = data['data'].event_status;
  
      }).catch(err=>{
        alert("Server is down.please try after some time..");
        this.navCtrl.pop();
        loader.dismiss();
      })
  
      }).then(()=>{
   
      //get activity
  
      this.rest.activity(formData).then(data => {
        this.activitytwo = data['data'].activity;
        this.activitytwoget = this.activitytwo[3];
  
      }).catch(err=>{
        alert("Server is down.please try after some time..");
        this.navCtrl.pop();
        loader.dismiss();
      })
  
      }).then(()=>{
  
        this.rest.responsibility(formData).then(data => {
          this.respons = data['data'].responsibility;
    
        }).catch(err=>{
          alert("Server is down.pleash try after some time..");
          this.navCtrl.pop();
          loader.dismiss();
        })
      }).then(()=>{
  //get Priority
       this.rest.Prevention(formData).then(data=>{
     
         this.EventPrevention=data['data'].EventPrevention;
       })
      this.rest.priorityGet(formData).then(data => {
  
        this.priorityGet = data['data'].priority;
  
      }).catch(err=>{
        alert("Server is down.pleash try after some time..");
        this.navCtrl.pop();
        loader.dismiss();
      })
      }).then(()=>{
        loader.dismiss();
      })
  
  
    }
   else{
    this.siteData=JSON.parse(localStorage.getItem("siteMaster"));
   
    this.activitytwo=JSON.parse(localStorage.getItem("activityMaster"));
    this.priorityGet=JSON.parse(localStorage.getItem('priorityMaster'))
    this.respons=JSON.parse(localStorage.getItem('responsMaster'))
    this.eventStatusData=JSON.parse(localStorage.getItem('statusMaster'))  

   }
 

    
  }

  ionViewDidLoad() {
    this.setBackButtonAction()
    console.log('ionViewDidLoad AddPage');
  }
 //Method to override the default back button action
 setBackButtonAction(){
  this.navBar.backButtonClick = () => {
  //Write here wherever you wanna do
    this.showConfirm()
  }
}
  portChange(item) {

  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Alert!',
      message: 'This will erase the progress, do you still want to go to Previous screen',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
          this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
  view() {
    this.navCtrl.push(EventPage)
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
        this.equipment = data['data'].equipment
   
      }).then(() => {
        loader.dismiss();
        //get emp
        formData.append('Site_Id', item);
        this.rest.employee(formData).then(data => {
          this.SiftincArr = data['data'].employee;
          for (let x = 0; x < this.SiftincArr.length; x++) {
           
            if (this.SiftincArr[x].emp_type === "Shift-in-Charge") {
              this.SiftInChargeList.push(this.SiftincArr[x])
            }
  
            if (this.SiftincArr[x].emp_type === "Service Engineer") {
              this.employeeList.push(this.SiftincArr[x])
              // this.SiftincArr = this.SiftincArr[x];
  
            }
            else {
           
            }
       
          }
        })
      })
    }
    else{
      // this.equipment=JSON.parse(localStorage.getItem("equipmentMaster"));
          
      alert(item)
    }
    

  }
  Continue() {
    const confirm = this.alertCtrl.create({
      title: 'Alert!',
      message: 'Have you checked the Up Date & Time?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            if (this.siteId && this.EquipmentId && this.description
              && this.uptime && this.downtime && this.Status && this.priority
              && this.Activity && this.shiftInCharge && this.engineer && this.responsId) {
                    if(this.EventIdPre){
                      this.allDataPass = [{
                        "siteId": this.siteId,
                         "Placebreakdown":this.Activity,
                        "EquipmentId": this.EquipmentId.EqpPlanId,
                        "description": this.description,
                        "uptime": this.update + this.uptime,
                        "downtime": this.downdate + this.downtime,
                        "Status": this.Status,
                        "priority": this.priority,
                        "Activity": this.activitytwoget.Activity_ID,
                        "shiftInCharge": this.shiftInCharge.Employee_ID,
                        "engineer": this.engineer.Employee_ID,
                        "responsableId": this.responsId.Responsibility_ID,
                        "Handovercomments": this.Handovercomments,
                         "eventpass": this.EventIdPre
                
                      }]
                      console.log(this.allDataPass)
                    }
                    else{
                          this.allDataPass = [{
                        "siteId": this.siteId,
                         "Placebreakdown":this.Activity,
                        "EquipmentId": this.EquipmentId.EqpPlanId,
                        "description": this.description,
                        "uptime": this.update + this.uptime,
                        "downtime": this.downdate + this.downtime,
                        "Status": this.Status,
                        "priority": this.priority,
                        "Activity": this.activitytwoget.Activity_ID,
                        "shiftInCharge": this.shiftInCharge.Employee_ID,
                        "engineer": this.engineer.Employee_ID,
                        "responsableId": this.responsId.Responsibility_ID,
                        "Handovercomments": this.Handovercomments
                
                
                      }]
                      console.log(this.allDataPass)
                    }
           
        
        
             this.navCtrl.push(WorkorderPage, { "PassAllData": this.allDataPass })
            }
            else {
              alert("Please fill all the mandatory fields")
            }
        
        
        
        
          }
        }
      ]
    });
    confirm.present();
 
   
  }
  onEventChange(item){
    this.EventIdPre=item;
  }
  Confirm() {
  
  }
}
