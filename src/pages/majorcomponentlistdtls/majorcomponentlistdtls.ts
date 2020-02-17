import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

/**
 * Generated class for the MajorcomponentlistdtlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-majorcomponentlistdtls',
  templateUrl: 'majorcomponentlistdtls.html',
})
export class MajorcomponentlistdtlsPage {
  list : any;
  Usertype: any;
  token: any;
  mess:any;
  statusApproc : any;
  desialReason : any ="";
  constructor(public rest: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.list=this.navParams.get('list')
    this.Usertype=localStorage.getItem('Usertype');
    console.log(this.list)
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MajorcomponentlistdtlsPage');
  }
  statusCheck(item,eventid){

    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('event_id', this.list.Event_ID);
    formData.append('approval_status',item)
    formData.append('approval_reason',item)
    
    this.rest.updateLCCWorkflowStatus(formData).then(dta=>{
      this.navCtrl.setRoot(HomePage)
      alert("All Changes Saved Successfully")
      this.mess=dta['data'].msg
      console.log(dta)
    })
  }

  okok(){
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('event_id', this.list.Event_ID);
  
    this.rest.requestLCCWorkflowStatusCustomer(formData).then(data=>{
      this.navCtrl.setRoot(HomePage)
      alert("All Changes Saved Successfully")
      this.mess=data['data'].msg
      console.log(data)
    })
  }

  submitStatus(){
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('event_id', this.list.Event_ID);
    formData.append('approval_status',this.statusApproc)
    formData.append('approval_reason',this.desialReason)
    
    this.rest.updateLCCWorkflowStatus(formData).then(dta=>{
      this.navCtrl.setRoot(HomePage)
      alert("All Changes Saved Successfully")
      this.mess=dta['data'].msg
      console.log(dta)
    })
  }
  approvalStatusButton(item,empType){
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('event_id', this.list.Event_ID);
    formData.append('request_forward_to',empType)
    formData.append('lcc_request_type',item)
    // event_id,request_forward_to,lcc_request_type
    this.rest.requestLCCWorkflowStatusAll(formData).then(data=>{
         alert(data['data'].msg)
         this.navCtrl.setRoot(HomePage)
      console.log(data)
    })

  }
}
