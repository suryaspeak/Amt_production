import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController, ActionSheetController, Loading } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FeedbacktabPage } from '../feedbacktab/feedbacktab';
import { TaskPage } from '../task/task';
import { RestProvider } from '../../providers/rest/rest';
import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
/**
 * Generated class for the BasictabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basictab',
  templateUrl: 'basictab.html',
})
export class BasictabPage {
  @ViewChild(Navbar) navBar: Navbar;
  token: any;
  siteData: any;
  equipment: any;
  description: any;
  uptime: any;
  partsarrgetnew : any=[];
  downtime: any;
  Status: any;
  priority: any = "2";
  activity: any;
  taskstatus : any;
  activitytwo: any;
  eventStatusData: any;
  priorityGet: any;
  siteId: any;
  EquipmentId: any;
  Activity: any;
  shiftInCharge: any;
  engineer: any;
  Handovercomments: any;
  downdate: any;
  update: any;
  activitytwo_id: any;
  SiftincArr: any;
  raisedby: any;
  activitytwoget: any;
  partsarr: any;
  respons: any;
  responsId: any;
  PassAllDataGet: any;
  taskDescription: any;
  Componentcode: any=[];
  Modifiercode: any;
  Tasktype: any;
  TaskCounter: any;
  Priority: any;
  partsarrget : any=[];
  ComponentArr: any;
  modifierCodeArr: any;
  Task_Status_ID: any;
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
  imageURIShop5: any = "";
  CauseArr: any;
  Cause: any;
  JobCodeArr: any;
  JobCode: any;
  repairDesc: any;
  Symptom: any;
  EstimatedTotaldurationhrs: any;
  Estimatedlabourqty: any='';
  Estimatedlabourhrs: any='';
  reseby: any;
  ports: any;
  partsId: any;
  rmchecked: any=[];
  SearchValue: any;
  taskDescarr : any=[];
  imagefile : any=[];
  SearchValueCompontent : any='';
  booleamcom: boolean=false;
  partsbool: boolean=false;
  loader : Loading;
  constructor(private photoViewer: PhotoViewer,public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public rest: RestProvider,
    private transfer: FileTransfer,
    private file: File,
    public toastController: ToastController, public actionSheetCtrl: ActionSheetController,
    public camera: Camera, public navCtrl: NavController,
    public navParams: NavParams) {

      this.loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      this.loader.present();


      var today = new Date().toISOString().split("T")[0];
      this.update=today;
      let dd = this.update.split('-');
      let firstName = dd[0];
      let sen = dd[1];
      let last = dd[2]

      let filan = dd[0] + "-" + dd[1] + "-" + dd[2]
      this.uptime=filan;
    
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.ComponentCodesAll(formData).then(data => {
     


    }).catch(err=>{
      alert("Service is down..Try after some time")
    this.loader.dismiss()
      this.navCtrl.pop();
     
    }).then(()=>{
      this.rest.applicationCode(formData).then(data => {
        this.ports = data['data'].applicationcodes;
        this.TaskCounter = this.ports[0];
  
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{

      this.rest.modifierCodes(formData).then(data => {

        this.modifierCodeArr = data['data'].modifier_codes;
        this.Modifiercode = this.modifierCodeArr[2]
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })

    }).then(()=>{

      this.rest.taskType(formData).then(data => {

        this.taskTypearr = data['data'].task_type;
        this.Tasktype = this.taskTypearr[4];
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{
      this.rest.sourceGet(formData).then(data => {

        this.sourceGetarr = data['data'].source
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{

      this.rest.causeGet(formData).then(data => {

        this.CauseArr = data['data'].cause
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{
      this.rest.jobCodesGet(formData).then(data => {

        this.JobCodeArr = data['data'].job_codes
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{
      this.rest.symptomGet(formData).then(data => {

        this.symptomgetArr = data['data'].symptom
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
  
    }).then(()=>{
      var formData = new FormData();
      formData.append('token', this.token);
      this.rest.siteGet(formData).then(data => {
        this.siteData = data['data'].site;
  
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{

    //get Status

    this.rest.eventStatus(formData).then(data => {
      this.eventStatusData = data['data'].event_status;

    }).catch(err=>{
      alert("Service is down..Try after some time")
      this.navCtrl.pop();
      this.loader.dismiss()
    })
    }).then(()=>{


    //get activity

    this.rest.activity(formData).then(data => {
      this.activitytwo = data['data'].activity;
      this.activitytwoget = this.activitytwo[3];
      console.log(data)
    })

      .catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })
    }).then(()=>{

      this.rest.responsibility(formData).then(data => {
        this.respons = data['data'].responsibility;
  
        console.log(data)
      }).catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      })

    }).then(()=>{


    //get Priority

    this.rest.priorityGet(formData).then(data => {

      this.priorityGet = data['data'].priority;

    })

      .catch(err=>{
        alert("Service is down..Try after some time")
        this.navCtrl.pop();
        this.loader.dismiss()
      }).then(()=>{
        this.rest.TaskStatus(formData).then(data=>{
          this.taskstatus=data['data'].taskstatus;

       
          console.log(data)
        }).catch(err=>{
          alert("Service is down..Try after some time")
          this.navCtrl.pop();
          this.loader.dismiss()
        })
      })
    }).then(()=>{
      this.loader.dismiss()
    })


  }

  datagetnew(){
    console.log(this.rmchecked)
  }
  getItems(item) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    console.log(item)
    if(item){
      if (item.length >= 3) {
        var formData = new FormData();
        formData.append('token', this.token);
        formData.append('partDesc', item);
        this.rest.parts(formData).then(data => {
         
          this.partsarr = data['data'].part;
          if(this.partsarr.length>0){
            this.partsbool=true;
       }else{
         this.partsbool=false;
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

  onSiteChange(item) {
    this.siteId = item;
    var formData = new FormData();
    formData.append('id', item);
    formData.append('token', this.token);
    this.rest.equipmentBySite(formData).then(data => {
      this.equipment = data['data'].equipment
      console.log(data)
    }).then(() => {
      //get emp
      formData.append('Site_Id', item);
      this.rest.employee(formData).then(data => {
        this.SiftincArr = data['data'].employee;
        console.log(data)
      })
    })

  }
  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad BasictabPage');
  }
  home() {
    this.navCtrl.push(HomePage)
  }
  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
    
        this.loader.dismiss();
        this.navCtrl.pop();
 
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
  feedback() {
    this.navCtrl.push(FeedbacktabPage)
  }

  submit() {
    console.log(this.partsarrget)
    console.log(this.uptime)
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
   

    var formData = new FormData();

    formData.append('token', this.token);
    formData.append('id', this.siteId);
    formData.append('Site_Id', this.siteId);
    formData.append('Eqp_Plan_ID', this.EquipmentId.EqpPlanId);
    formData.append('createdDate', new Date().toISOString());
    formData.append('Task_Type_ID', this.Tasktype.TaskTypeID);
  
      formData.append('Component_Code_ID', this.Componentcode);
   
   

    formData.append('task_desc', this.description);
    formData.append('Modifier_ID', this.Modifiercode.ModifierID);
    formData.append('Source_ID', this.sourceId.Source_ID);
    formData.append('Date_Notified', new Date().toISOString());
    formData.append('Symptom_ID', this.Symptom.Symptom_ID);
    formData.append('Cause_ID', this.Cause.Cause_ID);
    // formData.append('Repair_Notes', this.taskDescription);
    if(this.EstimatedTotaldurationhrs){
      formData.append('Expected_Duration', this.EstimatedTotaldurationhrs);
    }
    else{
      formData.append('Expected_Duration', "0");
    }
    formData.append('Estimatedlabourqty', this.Estimatedlabourqty);
    
    formData.append('Expected_Labor_Hours', this.Estimatedlabourhrs);
    formData.append('RaisedByID', this.raisedBy.Employee_ID);
    formData.append('Job_Code_Id', this.JobCode.JobCodeID);
    formData.append('Priority_ID', this.priority);
    formData.append('part_ID',JSON.stringify(this.partsarrget));
    formData.append('file',JSON.stringify(this.imagefile))
    formData.append('task_counter', this.TaskCounter.ApplicationCodeID);
    // formData.append('responsibility_ID', this.PassAllDataGet[0].responsableId);

    // formData.append('taskstatus',  this.Task_Status_ID);
    this.rest.createBackLog(formData).then(data => {
      console.log(data)
      alert("Task Created" + data['data'].event_notification)
      loader.dismiss();
      this.navCtrl.setRoot(HomePage)
    }).catch(err => {
      loader.dismiss();
      alert(JSON.stringify(err))
    })

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
  mcqAnswer(item,it){
    console.log(item,it)
    this.partsarrgetnew.push(item)
   this.partsarrget.push({name:it,partid:item,qt:""});
  //  this.partsarrget=JSON.stringify(this.partsarrget)
   console.log(this.partsarrget);
   this.partsarr=[]
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
          console.log(this.ComponentArr.length)
          if(this.ComponentArr.length>0){
               this.booleamcom=true;
          }else{
            this.booleamcom=false;
          }
          console.log(this.booleamcom)
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
    this.Componentcode=item
    console.log(item)

  }
  view(){
    this.navCtrl.pop()

  }
  imageView(i){
    this.photoViewer.show(i);
  }
}
