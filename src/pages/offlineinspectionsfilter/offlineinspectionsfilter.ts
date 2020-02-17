import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfflineinspectionsPage } from '../offlineinspections/offlineinspections';

/**
 * Generated class for the OfflineinspectionsfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlineinspectionsfilter',
  templateUrl: 'offlineinspectionsfilter.html',
})
export class OfflineinspectionsfilterPage {
  Offlinelist: any;
  offlineMaster: any;
  equtment: any;
  eventStatusData: any;
  siteOfflineData: any;
  equptArr: any = [];
  siteId: any = [];
  sourceGetarr: any;
  siteIdget: any;
  equipmentarr: any;
  sourceID: any;
  StatusId: any;
  taskDataOffline: any;
  siteOnly: any = [];
  equpOffline : any=[];
  sourceoffline : any= [];
  inspectionfilter : any;
  chekclistArr: any =[];
  selectEqp : any =[];
  modelArr : any = [];
  checklist : any;
  modelId : any;
  insinspectionfilter:any;
  question_against_checklist:any;
  listData : any;
  offlineDatainspection: any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     if(localStorage.getItem('offlineqstionans')){
       this.listData=JSON.parse(localStorage.getItem('offlineqstionans'))
     }
  
  }

  ionViewDidLoad() {
    this.inspectionfilter=JSON.parse(localStorage.getItem('inspectionfilter'));
    console.log('ionViewDidLoad OfflineinspectionsfilterPage');
   
    this.insinspectionfilter = JSON.parse(localStorage.getItem('inspectionfilter'));
   this.question_against_checklist=this.insinspectionfilter.inspectiondata.question_against_checklist
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.equtment = this.offlineMaster.equipment_details;
  
    this.siteOfflineData = this.offlineMaster.site;


    console.log('ionViewDidLoad OfflinetaskfilterPage');
    this.taskDataOffline = JSON.parse(localStorage.getItem('TaskOfflineRawData'))
    console.log(this.inspectionfilter)
  }
  onSiteChange(item) {
    this.equptArr = [];
    this.chekclistArr=[];
    this.siteId = item;
    for (let i = 0; i < this.equtment.length; i++) {
      if (this.siteId == this.equtment[i].siteId) {

        this.equptArr.push(this.equtment[i]);
      }
    }

    // console.log(this.inspectionfilter.inspectiondata.checklist_details)
        
      for(let g=0;g<this.inspectionfilter.inspectiondata.checklist_details.length;g++){
           if(this.inspectionfilter.inspectiondata.checklist_details[g].SiteId== this.siteId){

            this.chekclistArr.push(this.inspectionfilter.inspectiondata.checklist_details[g]);
           }
      }
  }
  onEqpChange(item){
    this.selectEqp=[];

     this.modelArr=this.inspectionfilter.inspectiondata;
    // console.log(this.modelArr.model_details)
    for(let i=0;i<this.modelArr.model_details.length;i++){
   
      if(this.modelArr.model_details[i].eqp_id==item.eqp_id){
        this.selectEqp.push(this.modelArr.model_details[i]) 
      }
    }
    
    // console.log(this.selectEqp)
  }
  view(){
    let filter=[];
    for (let x = 0; x < this.question_against_checklist.length; x++) {
      for (let z = 0; z < this.question_against_checklist[x].checklist_details.length; z++) {
        filter.push(this.question_against_checklist[x].checklist_details[z])
      }
      

  }
   
    if(this.siteId && this.equipmentarr && this.modelId && this.checklist){

      for(let g=0;g<filter.length;g++){
        if(this.siteId==filter[g].site &&
          this.equipmentarr == filter[g].equipment &&
          this.modelId== filter[g].model &&
          this.checklist == filter[g].checkListId
          ){
              this.offlineDatainspection.push(filter[g])

          }


   }
 
   if(this.offlineDatainspection.length>0){
         
       console.log(this.offlineDatainspection)
     this.navCtrl.push(OfflineinspectionsPage,{apivalue:this.offlineDatainspection})
   }else{
     alert("NO DATA FOUND")
   }
    }
    else{
      alert("* fields are mandatory")

    }



    console.log(filter)
  }
}
