import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

/**
 * Generated class for the TaskdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskdetails',
  templateUrl: 'taskdetails.html',
})
export class TaskdetailsPage {
  idget:any;
  token:any;
  sourceGetarr:any;
  CauseArr:any;
  JobCodeArr:any;
  symptomgetArr:any;
  constructor(public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.idget=this.navParams.get('id');
  this.token = JSON.parse(localStorage.getItem('menu'))
  console.log(this.idget)

  console.log(this.token)
  
  var formData = new FormData();
  formData.append('token', this.token);
  this.rest.sourceGet(formData).then(data => {

    this.sourceGetarr = data['data'].source
  })  

  this.rest.jobCodesGet(formData).then(data => {

    this.JobCodeArr = data['data'].job_codes
  })
  this.rest.symptomGet(formData).then(data => {

    this.symptomgetArr = data['data'].symptom
  })

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskdetailsPage');
  }
  submit(){
    alert('Edit Done')
    this.navCtrl.setRoot(HomePage)
  }
}
