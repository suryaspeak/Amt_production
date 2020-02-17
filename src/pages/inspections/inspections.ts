import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { QuestionPage } from '../question/question';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ListPage } from '../list/list';
/**
 * Generated class for the InspectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inspections',
  templateUrl: 'inspections.html',
})
export class InspectionsPage {
  token: any;
  siteData: any;
  modelData: any;
  checklist: any;
  checklistvalue: any;
  modelget: any;
  site_id: any;
  model_id: any;
  Eqptmntarr: any;
  Checknew: any;
  Modeldatapass: any;
  eqptget: any;
  equipment: any;
  modelid: any;
  equipment_id: any;
  checkid: any;
  siteid: any;
  localdata: any;
  pusharrNew: any=[];
  listData: any;
  userType: any;
  eqp:any;
  constructor(public platform:Platform,private iab: InAppBrowser,public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
   
  this.userType=localStorage.getItem('Usertype')

   
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;

      console.log(data)
    })
    setInterval(()=>{
     this.localdataFunc();
    
     },2000); 
     formData.append('current_page',"1")
  
     this.saveChecklist();
  }
  saveChecklist(){
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.getIPLocalSavedChecklists(formData).then(data=>{
      this.listData=data['data'].saved_checklist.data;
      console.log(this.listData)
    })
  }
    localdataFunc(){
      if(localStorage.getItem('locdata')){
        this.localdata=JSON.parse(localStorage.getItem('locdata'));
     }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsPage');
  }
  portChange(item) {
    console.log(item)

    this.site_id = item.value.SiteId;
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('id', this.site_id);

   
  
    this.rest.equipmentBySite(formData).then(data => {
      this.equipment = data['data'].equipment
      console.log(data)
    })
  }
  ModelChange(item) {
    console.log(item)

    this.Modeldatapass = item.value.ModelId;
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('model_id', item.value.ModelId);
    this.rest.modelbysite(formData).then(data => {
      this.Eqptmntarr = data['data'].equipment;
      console.log(data)
    })
    var formDataa = new FormData();
    formDataa.append('token', this.token);
    formDataa.append('id', this.site_id);
    formDataa.append('modelID', item.value.ModelId);
    formDataa.append('eqpPlanID', this.eqp);

    this.rest.checklistBySite(formDataa).then(data => {
      this.Checknew = data['data'].checklist;
      console.log(this.Checknew)

    })

  }
  viewaction(item){
   // console.log(item)
   this.pusharrNew=[];  
   this.pusharrNew.push(item)

    this.navCtrl.push(QuestionPage,{"apivalue":this.pusharrNew,"button":"yes"})
  }
  view() {
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('model_id', this.model_id.ModelId);
    formData.append('equipment_id', this.equipment_id.EqpPlanId);
    formData.append('checklist_id', this.checkid.checklistID);
    formData.append('site_id', this.siteid.SiteId);
    //  console.log(this.Modeldatapass,this.eqptget.EqpPlanId,this.checklistvalue.id);
    console.log(this.siteid.SiteId, this.model_id.ModelId, this.equipment_id.EqpPlanId, this.checkid.id)
    this.rest.question(formData).then(Data => {
      console.log(Data['data'].question)
      if (Data['data'].question.length == 0) {
        alert("No data found ")
      } else {
        console.clear();
       

        this.navCtrl.push(QuestionPage, { "dd": this.checklistvalue, "apivalue": Data['data'].question,"Eqp":this.equipment_id.EqpPlanId ,"checklist":this.checkid.chk_name})
      }
    }).then(()=>{
      this.model_id="";
      this.equipment_id="";
      this.checkid="";
      this.siteid="";
    })

  }

  EquipChange(item){
    this.eqp=item.value.EqpPlanId
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('EqpPlanId', item.value.EqpPlanId);
    console.log(item.value.EqpPlanId)
    this.rest.model(formData).then(data => {
      this.modelData = data['data'].model;
      console.log(data)
    })
  }
  download(){
    const options: InAppBrowserOptions = {
      toolbar: 'no',
      location: 'no',
      zoom: 'no'
  }

  this.platform.ready().then( () => {
    const browser = this.iab.create("https://nexgenams.gainwellindia.com/gainwell-amt/measurement-pdf",'_system');
 })
  }

  submited(){
    this.navCtrl.push(ListPage)
  }
  editSave(item){

    console.log(item)
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('measurement_master_id', item.id);
    formData.append('model_id', item.model_id);
    formData.append('site_id', item.site_id);
    formData.append('equipment_id', item.equipment_id);
    formData.append('checklist_id', item.checklist_id);
    this.rest.editAnswerAgainstQuestionSubmitMM(formData).then(data => {
      this.navCtrl.push(QuestionPage,{"apivalue":data['data'].edit_answer})
     
      // console.log(data['data'].edit_answer)
    })
    
  }
  deleteSave(item){
  
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('measurement_master_id', item.id);
   
     this.rest.deleteIPLocalSavedChecklists(formData).then(data=>{
       alert(data['data'].message)
         this.saveChecklist();
          console.log(data)
     })
  }
}
