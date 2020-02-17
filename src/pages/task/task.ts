import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobPage } from '../job/job';
import { WorkorderPage } from '../workorder/workorder';
import { TaskdetailsPage } from '../taskdetails/taskdetails';
import { BasictabPage } from '../basictab/basictab';
import { ViewtaskPage } from '../viewtask/viewtask';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  token:any;
  type:any;
  siteData:any;
  equipment:any;
  siteId:any;
  startDate:any='';
  endDate:any='';
  equipmentarr:any=[];
  Sourcearr:any;
  Statusarr:any;
  taskData: any;
  sourceID:any=[];
  StatusId:any=[];
  siteIdget: any;
  partsarr: any;
  constructor(public loadingCtrl:LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'))
    console.log(this.token)
    this.type="Pc";
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;
      this.siteIdget=this.siteData[0].SiteId; 
      this.siteId=this.siteIdget;

      console.log(data)
    }).then(d=>{
      this.onSiteChange(this.siteId)
    })
    this.rest.sourceGet(formData).then(Data=>{
      this.Sourcearr=Data['data'].source;
      console.log(Data)
    })
    this.rest.TaskStatus(formData).then(Data=>{
      this.Statusarr=Data['data'].taskstatus;
      console.log(Data)
    })
    
  }
  onSiteChange(item) {
    this.siteId = item;
    var formData = new FormData();
    formData.append('id', item);
    formData.append('token', this.token);
    this.rest.equipmentBySite(formData).then(data => {
      this.equipment = data['data'].equipment
      console.log(data)
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  // work(){
  //   this.navCtrl.push(WorkorderPage)
  // }
  viewtask(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait it may take few to several mins...'
    });
    loading.present();
    var formData = new FormData();
 
    formData.append('site_id', this.siteId);
    formData.append('token', this.token);
    formData.append('eqp_plan_id',JSON.stringify( this.equipmentarr));
    formData.append('startdate', this.startDate);
    formData.append('enddate', this.endDate);
    formData.append('Source_ID', JSON.stringify(this.sourceID));
    formData.append('Task_Status_ID',JSON.stringify(this.StatusId));
    this.rest.viewBacklogTask(formData).then(data=>{
       console.log(data['data'].viewBacklogTask.data)
       this.taskData=data['data'].viewBacklogTask.data;
       if(this.taskData.length=="0"){
         alert("No data found")
        loading.dismiss();
       }
       else{
        loading.dismiss();
        let arr=[
          this.siteId,
          this.token,
          JSON.stringify( this.equipmentarr),
          this.startDate,
          this.endDate,
          JSON.stringify(this.sourceID),
          JSON.stringify(this.StatusId),


        ]
         this.navCtrl.push(ViewtaskPage,{"data":this.taskData,arr:arr})
  
       }
      //  this.navCtrl.push(ViewtaskPage,{"data":data['data'].viewBacklogTask.data})
    })
  
  }
  basic(){
    this.navCtrl.push(BasictabPage)
  }
}
