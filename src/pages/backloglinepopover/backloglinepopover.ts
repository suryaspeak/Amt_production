import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BackloglinepopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backloglinepopover',
  templateUrl: 'backloglinepopover.html',
})
export class BackloglinepopoverPage {
  datapass: any;
  type: any;
  dataGet: any;
  firsttype: any;
  lineChartData: any;
  DaySelect: any;
  BacklogArr : any=[];
  pass: any;
  constructor(public viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.pass=this.navParams.get('pass')
    this.datapass = this.navParams.get('lineChartData');

    // if (localStorage.getItem('localcheckbox')) {
    //   this.type = localStorage.getItem('localcheckbox')
    // }
    // else {

    // }
    this.firsttype = "backlogstatus"
    console.log(this.pass);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackloglinepopoverPage');
  }
  radioChecked(item) {
    this.firsttype=item;
    if (item == "backlogstatus") {
      this.datapass = this.navParams.get('lineChartData');
    }
    else {
      this.datapass = this.navParams.get('datapass');
    }
    console.log(item)
  }
  site(item) {

   
 
    if (this.firsttype) {

      if (this.firsttype == "backlogstatus") {
        
         this.BacklogArr = [this.firsttype, item,this.type]
        // this.viewController.dismiss(BacklogArr);
      }
      else {
        this.BacklogArr = [this.firsttype, item,this.type]
        // this.viewController.dismiss(BacklogArr);
      
      }

    }
    else {
      alert("Select Type ")
    }


  }
  timeselect(item){
    this.DaySelect=item;
    console.log(item)
  }

  submit(){
    if(this.type){
      this.viewController.dismiss(this.BacklogArr);
    }else{
      alert("Select Site")
    }
    
  }
}
