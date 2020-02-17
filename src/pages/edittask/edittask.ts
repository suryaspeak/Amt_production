import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading,ActionSheetController } from 'ionic-angular';
import { ViewtaskPage } from '../viewtask/viewtask';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';
import { File, } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the EdittaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edittask',
  templateUrl: 'edittask.html',
})
export class EdittaskPage {
  @ViewChild(Navbar) navBar: Navbar;
  token: any;
  siteData:any;
  siteId: any;
  equipment: any;
  SiftincArr: any;
  SiftInChargeList: any;
  employeeList: any;
  Componentcode: any;
  ComponentArr: any;
  modifierCodeArr: any;
  Modifiercode: any='0';
  taskTypearr: any;
  Tasktype: any;
  sourceGetarr: any;
  JobCodeArr : any;
  symptomgetArr: any;
  CauseArr : any;
  priorityarr : any;
  Statusarr: any;
  Description: any;
  EquipmentId: any;
  taskcounter: any;
  priorityid: any;
  Date_Notified: any;
  Task_Status_ID: any;
  sourceId: any="";
  RaisedByID : any="";
  Expected_Labor_Hours: any="";
  Expected_Duration: any="";
  Task_Operation : any="";
  Symptom_ID: any="";
  Labour_Qty: any="";
  Cause_ID: any;
  JobCode_id : any;
  repairDesc: any='' ;
  Work_Order : any='';
  Task_ID :any;
  idget: any;
  statusget: any=[];
  taskCounterArr : any;
  Task_Status_IDget :any;
  partsarr: any=[];
  partsId: any;
  rmchecked: any=[];
  SearchValue:any;
  partsarrget :any=[];
  partsbool :boolean=true;
  partsarrgetnew : any=[];
  loader : Loading;
  imgarrTask : any =[];
  taskStatusId: any;
  images:any;
  imageURIShop: any = "";
  imageURIShop2: any = "";
  imageURIShop3: any = "";
  imageURIShop4: any = "";
  imageURIShop5: any = "";
  imagefile : any=[];
  constructor(private transfer: FileTransfer,
    private file: File, private photoViewer: PhotoViewer,public loadingCtrl: LoadingController,public rest: RestProvider,public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,
    public camera: Camera) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    this.loader.present();
    this.token = JSON.parse(localStorage.getItem('menu'))
     this.idget=this.navParams.get('id');
     this.Task_Status_IDget=this.navParams.get('Task_Status_ID')
   

    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('Task_ID', this.idget);
    formData.append('gwtaskID',this.navParams.get('idlast'))
    this.rest.AdminBacklogEditView(formData).then(data=>{
      console.log(data['data'])
      this.siteId=data['data'].task.Site_Id;
      this.imgarrTask=data['data'].taskAttachment;
      this.EquipmentId=data['data'].task.Eqp_Plan_ID;
      this.Description=data['data'].task.Description;
      this.Componentcode=data['data'].task.Component_Code_ID;
      this.Modifiercode=data['data'].task.Modifier_ID;
      this.Tasktype=data['data'].task.Task_Type_ID;
      this.taskcounter= data['data'].task.Application_Code_ID;
      this.priorityid=data['data'].task.Priority_ID;
      this.Date_Notified=data['data'].task.Date_Notified.substring(0,10);
      this.Task_Status_ID=data['data'].task.Task_Status_ID;
      this.Task_ID=data['data'].task.Task_ID;
  
      this.sourceId=data['data'].task.Source_ID;
      this.RaisedByID=data['data'].task.RaisedByID;
      this.Expected_Duration=data['data'].task.Expected_Duration;
      this.Expected_Labor_Hours=data['data'].task.Expected_Labor_Hours;
      this.Task_Operation=data['data'].taskOperation.Task_Operation;
      this.Symptom_ID=data['data'].task.Symptom_ID;
      this.images=data['data'].taskAttachment
      console.log(this.images)
      if(data['data'].taskOperationLabour){
    
        this.Labour_Qty=data['data'].taskOperationLabour.Labour_Qty;
        
      }
      else{
        this.Labour_Qty="0";
      }
     
      this.Cause_ID=data['data'].task.Cause_ID;
      this.JobCode_id=data['data'].taskOperation.Job_Code_Id;
      this.repairDesc=data['data'].task.Repair_Notes;
      this.Work_Order=data['data'].task.Work_Order;
      this.partsarrget=data['data'].taskOperationPart;

    
      //  console.log(this.partsarrget)
       this.loader.dismiss();
      
      if(this.siteId){
        this.onSiteChange(this.siteId)
      }
     
    }).then(()=>{
     
      console.log(this.EquipmentId,this.Cause_ID,this.JobCode_id,this.RaisedByID)
      
    })
    
    
    

    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;

    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    this.rest.ComponentCodesAll(formData).then(data => {
      this.ComponentArr = data['data'].component;




    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })


    this.rest.modifierCodes(formData).then(data => {

      this.modifierCodeArr = data['data'].modifier_codes;
      // this.Modifiercode = this.modifierCodeArr[2]
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    this.rest.taskType(formData).then(data => {

      this.taskTypearr = data['data'].task_type;

    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })

    this.rest.sourceGet(formData).then(data => {

      this.sourceGetarr = data['data'].source
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    this.rest.priorityGet(formData).then(data => {

      this.priorityarr = data['data'].priority;
   
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    
    this.rest.causeGet(formData).then(data => {

      this.CauseArr = data['data'].cause
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })

    this.rest.jobCodesGet(formData).then(data => {

      this.JobCodeArr = data['data'].job_codes
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    this.rest.symptomGet(formData).then(data => {

      this.symptomgetArr = data['data'].symptom
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
    this.rest.TaskStatus(formData).then(Data=>{
      this.Statusarr=Data['data'].taskstatus;
 
    
    }).catch(err=>{
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    }).then(()=>{

      this.rest.applicationCode(formData).then(data => {


        this.taskCounterArr = data['data'].applicationcodes;
        // this.TaskCounter = this.ports[0];
  
      }).catch(err=>{
        alert("Server is down.Please try after some time..");
        this.navCtrl.pop();
        this.loader.dismiss();
      })
    })
    
    
    
    this.loader.dismiss();
     
  }
  onSiteChange(item) {
    this.siteId = item;
    var formData = new FormData();
    formData.append('id', item);
    formData.append('token', this.token);
    this.rest.equipmentBySite(formData).then(data => {
      this.equipment = data['data'].equipment
    
    }).catch(err=>{

       this.navCtrl.pop();
    })
    
    
    .then(() => {
      //get emp
      formData.append('Site_Id', item);
      this.rest.employee(formData).then(data => {
        this.SiftincArr = data['data'].employee;
   
      }).catch(err=>{
        alert("Server Error. Try after some time")
        this.navCtrl.pop()
      })
    })



  }

  viewtask(){
    this.navCtrl.push(ViewtaskPage)
  }

  submit(){
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    this.loader.present();
  console.log(this.Modifiercode)

    var formData = new FormData();
    formData.append('id', this.siteId);
    formData.append('token', this.token);
    formData.append('Task_ID', this.Task_ID);
    formData.append('Modifier_ID', this.Modifiercode);
    formData.append('Priority_ID', this.priorityid);
    formData.append('Task_Operation', this.Task_Operation);
    formData.append('Work_Order', this.Work_Order);
    formData.append('Task_Type_ID', this.Task_Status_ID);
    formData.append('Component_Code_ID', this.Componentcode);
    formData.append('createdDate', new Date().toDateString());
    formData.append('task_desc', this.Description);
    formData.append('Source_ID', this.sourceId);
    formData.append('task_status',this.Task_Status_ID)
    formData.append('Date_Notified', this.Date_Notified);
    formData.append('Symptom_ID', this.Symptom_ID);
    formData.append('Cause_ID', this.Cause_ID);
    formData.append('file',JSON.stringify(this.imagefile))
    formData.append("part_ID",JSON.stringify(this.partsarrget))
    if(this.repairDesc){
      formData.append('Repair_Notes',this.repairDesc);
    }
     else{
      formData.append('Repair_Notes',"");
     }
    formData.append('Expected_Duration', this.Expected_Duration);
    formData.append('Labour_Qty', this.Labour_Qty);
    
    formData.append('Expected_Labor_Hours', this.Expected_Labor_Hours);
    if(this.RaisedByID){
      formData.append('RaisedByID', this.RaisedByID);
    }
    else{
      formData.append('RaisedByID', '0');
    }
   
    formData.append('Job_Code_Id', this.JobCode_id);
    // formData.append('activity_ID', this.token);
    // formData.append('part_ID', this.item);
    // formData.append('responsibility_ID', this.token);

    this.rest.editBackLog(formData).then(data=>{
      alert(data['data'].event_notification);
      this.navCtrl.pop()
      this.loader.dismiss();

    }).catch(err=>{
      this.loader.dismiss();
      alert("Server Error. Try after some time")
      this.navCtrl.pop()
    })
  }

  getItems(item) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    this.loader.present();
    if(item){
      if (item.length >= 3) {
        var formData = new FormData();
        formData.append('token', this.token);
        formData.append('partDesc', item);
        this.rest.parts(formData).then(data => {
  
          this.partsarr = data['data'].part;
          console.log(this.partsarr)
        
          if(this.partsarr.length>0){
            this.partsbool=true;
       }else{
         this.partsbool=false;
       }
        }).then(() => {
          this.loader.dismiss();
        })
      }
      else {
        alert("Must have atleast 3 keyword")
        this.loader.dismiss();
      }
    }
    else{
      this.loader.dismiss();
      alert("No keyword found")
    }

  }
  mcqAnswer(item,it){
     console.log(item,it)
    this.partsarrgetnew.push(item)
    this.partsarrget.push({name:it,partid:item,qt:""});
    this.partsarr=[]
    console.log(this.partsarrget)
 
  }
  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
    
        this.loader.dismiss();
        this.navCtrl.pop();
 
    }
  }
  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad Edittask');
  }
  imageclick(item){
    this.photoViewer.show(item);
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
}
