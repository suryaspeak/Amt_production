import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading } from 'ionic-angular';
import { JobPage } from '../job/job';
import { ViewPage } from '../view/view';
import { EventPage } from '../event/event';
import { RestProvider } from '../../providers/rest/rest';
import { ActionSheetController, ToastController, LoadingController, Events } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { HomePage } from '../home/home';
import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';
/**
 * Generated class for the WorkorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workorder',
  templateUrl: 'workorder.html',
})
export class WorkorderPage {
  @ViewChild(Navbar) navBar: Navbar;
  PassAllDataGet: any;
  taskDescription: any;
  Componentcode: any;
  Modifiercode: any;
  Tasktype: any;
  TaskCounter: any;
  taskstatus: any;
  Priority: any;
  token: any;
  partsbool :boolean=false;
  ComponentArr: any;
  modifierCodeArr: any;
  partsarr: any;
  sourceId: any;
  taskTypearr: any;
  sourceGetarr: any;
  symptomgetArr: any;
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
  rmchecked: any=[];
  SearchValue:any;
  partsarrget :any=[];
  SearchValueCompontent : any;
  Task_Status_ID : any;
  partsarrgetnew :any=[];
  taskDescarr: any=[];
  booleamcom: boolean=false
  loader: Loading;
  constructor(public alertCtrl :AlertController,public toastCtrl: ToastController, private transfer: FileTransfer, public events: Events,
    private file: File, public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public loadingCtrl: LoadingController,
    public toastController: ToastController, public actionSheetCtrl: ActionSheetController,
    public camera: Camera) {
  
      var today = new Date().toISOString().split("T")[0];
      this.datenotified=today;
      let dd = this.datenotified.split('-');
      let firstName = dd[0];
      let sen = dd[1];
      let last = dd[2]
      let filan = dd[0] + "-" + dd[1] + "-" + dd[2]
      this.datenotified=filan;
     this.loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      this.loader.present();
    this.token = JSON.parse(localStorage.getItem('menu'))

    this.PassAllDataGet = this.navParams.get('PassAllData');

    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.ComponentCodesAll(formData).then(data => {
    
     

    }).catch(err=>{
      alert("Server is down.Please try after some time..");
      this.navCtrl.pop();
      this.loader.dismiss();
    }).then(()=>{

      this.rest.applicationCode(formData).then(data => {


        this.ports = data['data'].applicationcodes;
        this.TaskCounter = this.ports[0];
  
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{
      formData.append('Site_Id', this.PassAllDataGet[0].siteId);
      this.rest.employee(formData).then(data => {
        this.SiftincArr = data['data'].employee;
  
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
  
    }).then(()=>{
      this.rest.modifierCodes(formData).then(data => {

        this.modifierCodeArr = data['data'].modifier_codes;
        this.Modifiercode = this.modifierCodeArr[2]
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{
      this.rest.taskType(formData).then(data => {

        this.taskTypearr = data['data'].task_type;
        this.Tasktype = this.taskTypearr[4];
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{
      this.rest.sourceGet(formData).then(data => {

        this.sourceGetarr = data['data'].source
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{
      this.rest.causeGet(formData).then(data => {

        this.CauseArr = data['data'].cause
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{

      this.rest.jobCodesGet(formData).then(data => {

        this.JobCodeArr = data['data'].job_codes
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    }).then(()=>{

      this.rest.symptomGet(formData).then(data => {

        this.symptomgetArr = data['data'].symptom
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      }).then(()=>{
        this.rest.TaskStatus(formData).then(data=>{
          this.taskstatus=data['data'].taskstatus;
          for(let i=0;i<this.taskstatus.length;i++){
            if(this.taskstatus[i].Description=="In Progress"
            || this.taskstatus[i].Description=="Completed"
            || this.taskstatus[i].Description=="Yet To Start"
            
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
          this.loader.dismiss();
        })
      })

  
    })
    
    
    
    
    .then(()=>{
      this.loader.dismiss();
    })

  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad WorkorderPage');
  }
  job() {
    console.log(
      this.sourceId.Source_ID ,
      this.raisedBy.Employee_ID ,
      this.Symptom.Symptom_ID
      , this.Cause.Cause_ID 
      ,  this.JobCode.JobCodeID
      ,  this.repairDesc ,
      this.taskDescription ,
      this.Estimatedlabourhrs , this.Estimatedlabourqty
    )
      //  if( this.sourceId.Source_ID && this.raisedBy.Employee_ID &&
      //   this.Symptom.Symptom_ID
      //   && this.Cause.Cause_ID 
      //   &&  this.JobCode.JobCodeID
      //   &&  this.repairDesc &&
      //   this.taskDescription &&
      //   this.Estimatedlabourhrs && this.Estimatedlabourqty


      //   ){

   

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
      loader.present();
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('id', this.PassAllDataGet[0].siteId);
      formData.append('Site_Id', this.PassAllDataGet[0].siteId);
      formData.append('Eqp_Plan_ID', this.PassAllDataGet[0].EquipmentId);
      formData.append('Event_Description', this.PassAllDataGet[0].description);
      formData.append('Priority_ID', this.PassAllDataGet[0].priority);
      formData.append('event_status', this.PassAllDataGet[0].Status);
      formData.append('Break_Down', this.PassAllDataGet[0].Placebreakdown);
      formData.append('Planned_Down_Time', this.PassAllDataGet[0].downtime);
      formData.append('Planned_Up_Time', this.PassAllDataGet[0].uptime);
      formData.append('createdDate', new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      formData.append('ShiftIncharge', this.PassAllDataGet[0].shiftInCharge);
      formData.append('Engineer', this.PassAllDataGet[0].engineer);
      formData.append('HandoverComments', this.PassAllDataGet[0].Handovercomments);
      formData.append('Task_Type_ID', this.Tasktype.TaskTypeID);
      formData.append('Component_Code_ID', this.Componentcode);
      formData.append('task_desc', this.taskDescription);
      formData.append('Modifier_ID', this.Modifiercode.ModifierID);
      formData.append('Source_ID', this.sourceId.Source_ID);
      formData.append('Date_Notified', new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      formData.append('Symptom_ID', this.Symptom.Symptom_ID);
      formData.append('Cause_ID', this.Cause.Cause_ID);
      formData.append('Repair_Notes',this.repairDesc);
      if(this.EstimatedTotaldurationhrs){
        formData.append('Expected_Duration', this.EstimatedTotaldurationhrs);
      }
      else{
        formData.append('Expected_Duration', "0");
      }
      formData.append('Expected_Labor_Hours', this.Estimatedlabourhrs);
      formData.append('Estimatedlabourqty', this.Estimatedlabourqty);
      formData.append('RaisedByID', this.raisedBy.Employee_ID);
      formData.append('Repair_Code_Id', "0");
      formData.append('activity_ID', this.PassAllDataGet[0].Activity);
      formData.append('part_ID',JSON.stringify(this.partsarrget));
      formData.append('responsibility_ID', this.PassAllDataGet[0].responsableId);
      formData.append('task_counter', this.TaskCounter.ApplicationCodeID);
      formData.append('Job_Code_Id',  this.JobCode.JobCodeID);
      formData.append('taskstatus',  this.Task_Status_ID);
      if(this.PassAllDataGet[0].eventpass){
        formData.append('EventPrv',  this.PassAllDataGet[0].eventpass);
      }
                                      
      this.rest.submitWorkorder(formData).then(Data=>{
        alert("Event Created Successfully")
        this.navCtrl.setRoot(HomePage)
        loader.dismiss();
      }).catch(err=>{
        loader.dismiss();
        alert("Server Down..Try after sometime")
      })
  
    // }
    // else{
    //   alert("Please fill all the mandatory fields")
    // }

 
  }
  view() {
    this.navCtrl.push(EventPage)
  }
  public openImages(param) {
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
  mcqAnswer(item,it){

    this.partsarrgetnew.push(item)
    this.partsarrget.push({name:it,partid:item,qt:""});
    this.partsarr=[]
 
  }

  getImage(source, param) {


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
  
      filename = filename.split("?")[0];
      //then use the method reasDataURL  btw. var_picture is ur image variable
      this.file.readAsDataURL(path, filename).then(data => {


        if (param == 'AddressProof') {
          this.imageURIShop = data;

        }
        else if (param == 'PANNoScanCopy') {
          this.imageURIShop2 = data;

        }
        else if (param == 'TINNoScanCopy') {
          this.imageURIShop3 = data;
        }
        else {
          this.imageURIShop4 = data;
        }


      }).catch(err => {


        console.log(JSON.stringify(err))
      })


    }, (err) => {
      console.log(JSON.stringify(err));

    });

  }

  getItems(item) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();
    if(item){
      if (item.length >= 3) {
        var formData = new FormData();
        formData.append('token', this.token);
        formData.append('partDesc', item);
        this.rest.parts(formData).then(data => {
  
          this.partsarr = data['data'].part;
          this.partsarr = data['data'].part;
          if(this.partsarr.length>0){
            this.partsbool=true;
       }else{
         this.partsbool=false;
       }
        }).then(() => {
          loader.dismiss();
        })
      }
      else {
        alert("Must have atleast 3 keyword")
        loader.dismiss();
      }
    }
    else{
      loader.dismiss();
      alert("No keyword found")
    }

  }

 //Method to override the default back button action
 setBackButtonAction(){
  this.navBar.backButtonClick = () => {
    this.loader.dismiss();
    this.navCtrl.pop();
  //Write here wherever you wanna do
    // this.showConfirm()
  }
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

  getComponent(item) {
    console.log(item)
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    console.log(item)
    if(this.SearchValueCompontent){
      if (this.SearchValueCompontent.length >= 3) {
        var formData = new FormData();
        formData.append('token', this.token);
        formData.append('componentDesc', this.SearchValueCompontent);
        this.rest.ComponentCodesAll(formData).then(data => {
         
          this.ComponentArr = data['data'].component;
          if(this.ComponentArr.length>0){
            this.booleamcom=true;
       }else{
         this.booleamcom=false;
       }
          console.log(data)
        }).then(() => {
          loader.dismiss();
        })
      }
      else {
        alert("must have atleast 3 keyword")
        loader.dismiss();
      }
    }
    else{
      loader.dismiss();
      alert("no keyword found")
    }
  
  }
  comselect(item){
    this.Componentcode=item;
    console.log(item)
1
  }
}1
