import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { EditprofilePage } from '../editprofile/editprofile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
token : any;
User: any;
UserName: any;
email : any;
component_code_ids : any;
branch_name : any;
eqpplan_name : any;
site_name : any;
fleet_name : any;
  constructor(public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token=JSON.parse(localStorage.getItem('menu'))
      
  var formData = new FormData();
  formData.append('token', this.token);
    this.rest.userprofile(formData).then(data=>{
      this.UserName=data['profile_details'][0].username;
      this.email=data['profile_details'][0].email;
      this.component_code_ids=data['profile_details'][0].component_code_ids;
      this.branch_name=data['profile_details'][0].branch_name;
      this.eqpplan_name=data['profile_details'][0].eqpplan_name;
      this.site_name=data['profile_details'][0].site_name;
      this.fleet_name=data['profile_details'][0].fleet_name;
      console.log(data)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  setting(){
    this.navCtrl.push(EditprofilePage)
  }
}
