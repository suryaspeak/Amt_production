import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
/**
 * Generated class for the OfflinetaskcreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlinetaskcreate',
  templateUrl: 'offlinetaskcreate.html',
})
export class OfflinetaskcreatePage {
  offlineMaster :any;
  eventStatusData : any;
  siteOfflineData :any;
  priorityGet : any;
  activitytwo : any;
  respons: any;
  equtment : any;
  eventPrevention : any;
  pageCheck :boolean=false;
  editData: any;
  plaBreak : any;
  siteId : any;
  description : any;
  Status : any;
  priority : any;
  activitytwoget : any;
  shiftInCharge : any;
  engineer : any;
  responsId : any;
  Handovercomments : any;
  equptArr : any;
  EquipmentId : any;
  emp_data : any;
  engineerList: any;
  SiftInChargeList: any;
  raisedBy: any;
  modifierCodeArr : any;
  ComponentArr: any;
  taskTypearr : any;
  taskcounter : any;
  Componentcode : any;
  TaskCounter : any;
  Tasktype : any;
  sourceGetarr : any;
  symptomgetArr : any;
  CauseArr : any;
  Symptom : any;
  JobCodeArr : any;
  imagefile: any=[];
  Modifiercode : any;
  imageURIShop: any = "";
  imageURIShop2: any = "";
  imageURIShop3: any = "";
  imageURIShop4: any = "";
  imageURIShop5: any = "";
  uptime : any;
  JobCode : any;
  EstimatedTotaldurationhrs : any;
  Estimatedlabourqty: any;
  Estimatedlabourhrs : any;
  sourceId : any;
  Cause : any;
  getLocalData : any=[];
  taskPage:any;
  editdata :any;
  arrOfflineEventCreate : any=[];
  siteIdGet : any;
  raisedByy:any;
  Repair_Notes:any;
  constructor(private photoViewer: PhotoViewer,public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public rest: RestProvider,
    private transfer: FileTransfer,
    private file: File,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera, public navCtrl: NavController,
    public navParams: NavParams) {
      


      // if(this.navParams.get('taskPage')){
      //   this.editData=this.navParams.get('editdata').Site_Id;

      //   console.log(this.editData)

      //   this.pageCheck=true;

      //   // this.onSiteChange(this.navParams.get('editdata').Site_Id)

      // }else{
      //    this.pageCheck=false;
      // }
  }

  ionViewDidLoad() {
    var today = new Date().toISOString().split("T")[0];
    this.uptime=today;
    let dd = this.uptime.split('-');
    let firstName = dd[0];
    let sen = dd[1];
    let last = dd[2]

    let filan = dd[0] + "-" + dd[1] + "-" + dd[2]
    this.uptime=filan;
    this.offlineMaster = JSON.parse(localStorage.getItem('offlineData'));
    this.eventStatusData = this.offlineMaster.event_status;
    this.siteOfflineData = this.offlineMaster.site;
    this.priorityGet = this.offlineMaster.priority;
    this.activitytwo = this.offlineMaster.activity;
    this.Repair_Notes =this.offlineMaster.Repair_Notes
    this.respons = this.offlineMaster.responsibility;
    this.equtment = this.offlineMaster.equipment_details;
    this.eventPrevention = this.offlineMaster.event_prevention;
    this.ComponentArr= this.offlineMaster.component_code;
    this.modifierCodeArr=  this.offlineMaster.modifier_codes;
    this.taskTypearr =this.offlineMaster.task_type;
    this.taskcounter =this.offlineMaster.taskcounter;
    this.priorityGet= this.offlineMaster.priority;
    this.sourceGetarr=  this.offlineMaster.source;
    this.symptomgetArr= this.offlineMaster.symptom;
    this.CauseArr= this.offlineMaster.cause;
    this.JobCodeArr=this.offlineMaster.jobcodes;
    this.Modifiercode = this.modifierCodeArr[2];
    this.Tasktype = this.taskTypearr[4];
    this.TaskCounter = this.taskcounter[0];
    this.priority=this.priorityGet[1].Priority_ID;
   if(this.navParams.get('page')){
     this.pageCheck=true;
     this.editData=this.navParams.get('itemGet')
     console.log(this.editData)
     this.plaBreak=this.editData.Break_Down;
     this.siteId=this.editData.Site_Id;
     this.description=this.editData.task_desc;
     this.Componentcode=this.editData.Component_Code_ID;
     this.Modifiercode=this.editData.Modifier_ID
     this.Status= this.editData.event_status;
     this.priority=this.editData.Priority_ID;
     this.siteIdGet=this.editData.Site_Id;
     this.onSiteChange(this.editData.Site_Id)
      this.activitytwoget=this.editData.activity_ID;
      this.shiftInCharge =this.editData.ShiftIncharge;
      this.engineer= this.editData.Engineer;
      this.Tasktype=this.editData.Task_Type_ID;
      this.TaskCounter=this.editData.task_counter;
      this.responsId= this.editData.responsibility_ID;
      this.Handovercomments=this.editData.HandoverComments;
      this.priority=this.editData.Priority_ID;
      this.uptime=this.editData.Date_Notified;
      this.EstimatedTotaldurationhrs=this.editData.Expected_Duration;
      this.Estimatedlabourqty=this.editData.Estimatedlabourqty;
      this.Estimatedlabourhrs=this.editData.Expected_Labor_Hours;
      this.JobCode=this.editData.Job_Code_Id;
      this.Cause=this.editData.Cause_ID;
      this.Symptom=this.editData.Symptom_ID;
      this.sourceId=this.editData.Source_ID;
      this.raisedByy= this.editData.RaisedByID;
      this.Repair_Notes =this.editData.Repair_Notes
    //  alert(this.priorityGet)
   
   }else{
     this.pageCheck=false;
     console.log("come otherpage")
   }
    console.log('ionViewDidLoad OfflinetaskcreatePage');
  }
  onSiteChange(item) {
    if(this.navParams.get('page')){
      this.equptArr = [];
      this.siteId = item;
      for (let i = 0; i < this.equtment.length; i++) {
        if (this.siteId == this.equtment[i].siteId) {
  
          this.equptArr.push(this.equtment[i]);
        }
      }
 
        for(let z=0;z<this.equptArr.length;z++){
          if(this.equptArr[z].eqp_id==this.editData.Eqp_Plan_ID){

            this.EquipmentId=this.equptArr[z];
          
               
          }else{
            console.log("no data found")
          }
        }
            console.log(this.activitytwo)
      
        console.log(this.offlineMaster.emp_data)
  
      this.emp_data = this.offlineMaster.emp_data;
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.siteId) {
          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by
        
        }
       
      }
     
  
    }else{
      this.equptArr = [];
      this.siteId = item;
      for (let i = 0; i < this.equtment.length; i++) {
        if (this.siteId == this.equtment[i].siteId) {
  
          this.equptArr.push(this.equtment[i]);
        }
      }
  
      this.emp_data = this.offlineMaster.emp_data;
      for (let x = 0; x < this.emp_data.length; x++) {
        if (this.emp_data[x].site_id == this.siteId) {
          this.engineerList = this.emp_data[x].engineer;
          this.SiftInChargeList = this.emp_data[x].shift_in_charge;
          this.raisedBy = this.emp_data[x].raised_by

        }
       
      }
      console.log(this.SiftInChargeList)
    
   
    }
    
  }

  openImages(param) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [

        {
          text: 'Use Camera',
          handler: () => {
            this.getImage(this.camera.PictureSourceType.CAMERA, param);
          }
        },
        {
          text: 'Use Gallery',
          handler: () => {
            // this.getImage(this.camera.PictureSourceType.SAVEDPHOTOALBUM,param);
            this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY, param);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  getImage(source, param) {
    console.log("gii" + source);

    const options: CameraOptions = {
      quality: 90,
      allowEdit: true,
      sourceType: source,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.FILE_URI
    }

    this.camera.getPicture(options).then((imageData) => {
      let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      console.log("path" + path);
      console.log("filename" + filename.split("?")[0]);
      filename = filename.split("?")[0];
      //then use the method reasDataURL  btw. var_picture is ur image variable
      this.file.readAsDataURL(path, filename).then(data => {


        if (param == 'imageone') {
          this.imageURIShop = data;

        }
        else if (param == 'imagetwo') {
          this.imageURIShop2 = data;

        }
        else if (param == 'imagethree') {
          this.imageURIShop3 = data;
        }
        else if (param == 'imagefour') {
          this.imageURIShop4 = data;
        }
        else {
             this.imageURIShop5=data;
        }
 

         
            this.imagefile=[
              this.imageURIShop,this.imageURIShop2,
              this.imageURIShop3,this.imageURIShop4,
              this.imageURIShop5
            ]


      }).catch(err => {


        console.log(JSON.stringify(err))
      })


    }, (err) => {
      console.log(JSON.stringify(err));

    });

  }

  submit (){

      // console.log(this.siteId,
      //   this.EquipmentId.eqp_id,
      //   this.description,
      //   this.Componentcode,
      //   this.Modifiercode.ModifierID,
      //   this.Tasktype.TaskTypeID,
      //   this.TaskCounter.ApplicationCodeID,
      //   this.priority,
      //   this.uptime,
      //   this.EstimatedTotaldurationhrs,
      //   this.Estimatedlabourqty,
      //   this.Estimatedlabourhrs,
      //   this.raisedBy.Employee_ID,
      //   this.sourceId.Source_ID,
      //   this.Symptom.Symptom_ID,
      //   this.Cause.Cause_ID,
      //   this.JobCode.JobCodeID)
        if(this.navParams.get('page')){
          this.arrOfflineEventCreate=[{
            "task_id":this.editData.task_id,
            "Site_Id":this.siteId,
            "Eqp_Plan_ID": this.EquipmentId.eqp_id,
            "eqp_name":this.EquipmentId.eqp_name,
            "createdDate":new Date().toISOString(),
            "Task_Type_ID" : this.Tasktype,
            "Component_Code_ID":this.Componentcode,
            "task_desc":  this.description,
            "Modifier_ID":  this.Modifiercode,
            "Source_ID":   this.sourceId,
            "Date_Notified":new Date().toISOString(),
            "Symptom_ID":this.Symptom,
            "Cause_ID": this.Cause,
            "Expected_Duration": this.EstimatedTotaldurationhrs,
            "Estimatedlabourqty": this.Estimatedlabourqty,
            "Expected_Labor_Hours":  this.Estimatedlabourhrs,
            "RaisedByID": this.raisedByy,
            "Job_Code_Id":this.JobCode,
            "Priority_ID": this.priority,
            "task_counter": this.TaskCounter,
            "Repair_Notes":this.Repair_Notes
          }]

           console.log(this.arrOfflineEventCreate)

           this.getLocalData=JSON.parse(localStorage.getItem('TaskLocal'));
               console.log(this.arrOfflineEventCreate)
               console.log(this.getLocalData)
     
           var index =  this.getLocalData.findIndex(x=>x.task_id === this.arrOfflineEventCreate[0].task_id)
         
          console.log(index)
          if(index==-1){
            alert("somthing went wrong")
          }
          else{

            this.getLocalData.splice(index, 1);
      
            console.log(this.editData)
            let a= this.getLocalData.concat(this.arrOfflineEventCreate[0])
            localStorage.setItem("TaskLocal",JSON.stringify(a))
            alert("Offline Task Edit Successfully")
            this.navCtrl.setRoot(HomePage)

          }









            // come from edit page
        }else{
          this.arrOfflineEventCreate=[{
            "task_id":Math.floor(Math.random() * 6999) + 1,
            "Site_Id":this.siteId,
            "Eqp_Plan_ID": this.EquipmentId.eqp_id,
            "eqp_name":this.EquipmentId.eqp_name,
            "createdDate":new Date().toISOString(),
            "Task_Type_ID" : this.Tasktype.TaskTypeID,
            "Component_Code_ID":this.Componentcode,
            "task_desc":  this.description,
            "Modifier_ID":  this.Modifiercode.ModifierID,
            "Source_ID":   this.sourceId.Source_ID,
            "Date_Notified":new Date().toISOString(),
            "Symptom_ID":this.Symptom.Symptom_ID,
            "Cause_ID": this.Cause.Cause_ID,
            "Expected_Duration": this.EstimatedTotaldurationhrs,
            "Estimatedlabourqty": this.Estimatedlabourqty,
            "Expected_Labor_Hours":  this.Estimatedlabourhrs,
            "RaisedByID": this.raisedByy,
            "Job_Code_Id":this.JobCode.JobCodeID,
            "Priority_ID": this.priority,
            "Repair_Notes":this.Repair_Notes,
            "task_counter": this.TaskCounter
          }]
    
    
        console.log(this.arrOfflineEventCreate)
      if (localStorage.getItem('TaskLocal')) {
        this.getLocalData = JSON.parse(localStorage.getItem('TaskLocal'));
    
        let a = this.arrOfflineEventCreate.concat(this.getLocalData)
        localStorage.setItem('TaskLocal', JSON.stringify(a))
        console.log(a)
        this.navCtrl.setRoot(HomePage);
        alert("Offline Task Create")
      } else {
       
        alert("Offline Task Create")
        localStorage.setItem("TaskLocal", JSON.stringify(this.arrOfflineEventCreate))
  
        this.navCtrl.setRoot(HomePage)
      }
  
        }
       
    
  }
}
