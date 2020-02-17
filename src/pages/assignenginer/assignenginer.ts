import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AssignenginerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignenginer',
  templateUrl: 'assignenginer.html',
})
export class AssignenginerPage {
  EventID: any;
  token : any;
  siftinc: any;
  Handoverconnent : any;
  eng : any;
  engID : any;
  siftincID: any;
  List: any;
  msg : any="";
  engmsg: any="";
  constructor(public loadingCtrl:LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.EventID=this.navParams.get("EventID");
  this.token=JSON.parse(localStorage.getItem('menu'))
    
  
  var formData = new FormData();
    formData.append('token', this.token);
    formData.append('Event_ID', this.EventID);
  
  
    this.rest.AssignEngineerHistory(formData).then(data=>{
      
      this.List=data['data'].assign_job_history;
      console.log(this.List)

    })

  formData.append('Event_ID', this.EventID);
  this.rest.shiftinchargeget(formData).then(data=>{
    this.siftinc=data['data'].shift_in_charge;
    if(this.siftinc.length==0){
      this.msg="No data found"
    }
    this.eng=data['data'].engineer;
    if(this.eng.length=="0"){
      this.engmsg="No data found"
    }
    console.log(data)
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignenginerPage');
  }
  view(){

    if(this.siftincID){

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('Event_ID', this.EventID);
      formData.append('ShiftIncharge', this.siftincID);
      formData.append('Engineer', this.engID);
      formData.append('HandoverComments', this.Handoverconnent);
      formData.append('createdDate',new Date().toLocaleDateString()),
      // formData.append('createdDate',new Date().to;)
      this.rest.AssignEngineerToEvent(formData).then(data=>{
        loader.dismiss();
        this.List=data['data'].assign_job;
        console.log(this.List)
  
      })
    }else{
      alert("Select Shift inCharge")
    }

    // this.
  }
}
