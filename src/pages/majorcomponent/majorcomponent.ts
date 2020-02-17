import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MajorcomponentlistdtlsPage } from '../majorcomponentlistdtls/majorcomponentlistdtls';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the MajorcomponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-majorcomponent',
  templateUrl: 'majorcomponent.html',
})
export class MajorcomponentPage {
  List: any;
  token: any;
  Usertype: any;
  constructor(public loadingCtrl: LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.List= this.navParams.get('List')
    console.log(this.List)
    this.Usertype=localStorage.getItem('Usertype')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MajorcomponentPage');
  }
  next(item){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('event_id', item);
    formData.append('token', this.token);
    this.rest.viewLCCWorkflowDetails(formData).then(data=>{
      console.log(data['data'].lcc_workflow_details)
      loader.dismiss();
      this.navCtrl.push(MajorcomponentlistdtlsPage,{"list":data['data'].lcc_workflow_details})
    })
  
  }
}
