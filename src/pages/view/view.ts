import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailsPage } from '../details/details';
import 'rxjs/add/operator/map'
import { WorkorderPage } from '../workorder/workorder';
import { AddPage } from '../add/add';
import { EventdetailsPage } from '../eventdetails/eventdetails';
import { EventPage } from '../event/event';
import { EditeventPage } from '../editevent/editevent';
import { RestProvider } from '../../providers/rest/rest';
import { EditattacmentPage } from '../editattacment/editattacment';
import { AssignenginerPage } from '../assignenginer/assignenginer';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  information: any[];
  dataget: any;
  token:any;
  arr : any;
  pass : any;
  page : number=1;
  pagingEnabled :boolean=true;
  check: any;
  constructor(public loadingCtrl: LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams,private http: Http) {
    this.dataget=this.navParams.get('dd');
    this.arr=this.navParams.get('arr');
    this.check=this.navParams.get('check');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  add(){
    this.navCtrl.push(AddPage)
  }

  details(item){
    console.log(item)
    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();

    this.token=JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('event_id', item.gw_eventId);
    formData.append('Event_ID', item.Event_ID);
    formData.append('EqpPlanId', item.EqpPlanId);
    
    
    this.rest.viewEventDetails(formData).then(data=>{
      loader.dismiss()
      this.navCtrl.push(EventdetailsPage,{"data":data['data'].viewEventDetails})

    })
    // 
  }
  view(){
    
    this.navCtrl.push(EventPage)
  }
  edit(item){

    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    
    this.token=JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('Event_ID', item.Event_ID);
    
    this.rest.AdminEventEditView(formData).then(data=>{
      loader.dismiss();
      this.navCtrl.push(EditeventPage,{"data":item.Event_ID,"dataallItem": item,check:this.check})
  

    })
   
  }
  attac(item){
    this.navCtrl.push(EditattacmentPage,{eventid:item.Event_ID})

  }

  doInfinite(infiniteScroll: any) {

    this.page = this.page + 1;
    this.pass=this.page
    var formData = new FormData();
    formData.append('site_id', this.arr[0]);
    formData.append('token',this.arr[1]);
    formData.append('eqp_plan_id', this.arr[2]);
    formData.append('status', this.arr[3]);
    formData.append('startdate', this.arr[4]);
    formData.append('customer_raised', this.arr[5]);
    formData.append('enddate', this.arr[6]);
    formData.append("page", this.pass)
     this.rest.viewEventsInProgressOrCompleted(formData).then(data=>{
        // this.newposts1 = data;
        console.log(data['count'])
        // this.newposts = this.newposts1;  
        this.dataget.push(...data['data'].viewEventIPC.data);
        if (data['count']=="0") {
          this.pagingEnabled = false;
        } else {
          this.pagingEnabled = true;
        }

        infiniteScroll.complete();
    });
}
assign(item){
  this.navCtrl.push(AssignenginerPage,{EventID:item})
}
}
