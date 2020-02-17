import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskdetailsPage } from '../taskdetails/taskdetails';
import { EdittaskPage } from '../edittask/edittask';
import { RestProvider } from '../../providers/rest/rest';
import { BasictabPage } from '../basictab/basictab';

/**
 * Generated class for the ViewtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewtask',
  templateUrl: 'viewtask.html',
})
export class ViewtaskPage {
dataget:any=[];
token:any;
arrget: any;
page : number=1;
pass : any;
pagingEnabled : boolean=true;
  constructor(public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.dataget=this.navParams.get('data');
  this.arrget=this.navParams.get('arr')
  console.log(this.dataget)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewtaskPage');
  }
  taskdetails(item){

    this.navCtrl.push(EdittaskPage,{id:item.Task_ID,Task_Status_ID:item.Task_Status_ID,idlast:item.id})

  }
  taskedit(){
    this.navCtrl.push(EdittaskPage)
  }

  doInfinite(infiniteScroll: any) {

    this.page = this.page + 1;
    this.pass=this.page
    var formData = new FormData();
    formData.append('site_id', this.arrget[0]);
    formData.append('token', this.arrget[1]);
    formData.append('eqp_plan_id',this.arrget[2]);
    formData.append('startdate', this.arrget[3]);
    formData.append('enddate', this.arrget[4]);
    formData.append('Source_ID', this.arrget[5]);
    formData.append('Task_Status_ID',this.arrget[6]);
    formData.append("page", this.pass)
     this.rest.viewBacklogTask(formData).then(data=>{
        // this.newposts1 = data;
        console.log(data)
        // this.newposts = this.newposts1;  
        this.dataget.push(...data['data'].viewBacklogTask.data);
        if (data['count']=="0") {
          this.pagingEnabled = false;
        } else {
          this.pagingEnabled = true;
        }

        infiniteScroll.complete();
    });
}
view(){
  this.navCtrl.push(BasictabPage)
}
}
