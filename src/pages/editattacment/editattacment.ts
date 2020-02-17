import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the EditattacmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editattacment',
  templateUrl: 'editattacment.html',
})
export class EditattacmentPage {
  eventidGet: any;
  token : any;
  listData: any;
  idget : any;
  constructor(public loadingCtrl:LoadingController,public rest: RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
 
 
    this.eventidGet=this.navParams.get('eventid')
  this.token = JSON.parse(localStorage.getItem('menu'))
  var formData = new FormData();
  formData.append('token', this.token);
  formData.append('Event_ID', this.eventidGet);
    this.rest.AttachWorkOrderView(formData).then(data=>{
      this.listData=data['data'].task_attachment;
      loader.dismiss();
      console.log(data)
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditattacmentPage');
  }
  attach(){
    if(this.idget){
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      var formData = new FormData();
    formData.append('token', this.token);
    formData.append('Event_ID', this.eventidGet);
    formData.append('id', this.idget);
    this.rest.AttachWorkorderToEvent(formData).then(data=>{
      alert(data['data'].task_attachment)
      loader.dismiss();
      console.log(data)
      this.navCtrl.pop();
    })
    }
    else{
      alert("Select Workorder")
    }
  
    // token,id,Event_ID
  }
}
