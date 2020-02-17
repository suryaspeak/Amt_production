


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,PopoverController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  public show: boolean;
  public slideslow:boolean=false;
  public month;
  analysis:any;
  callback:any;
  items:any;
  passdata: any;
  constructor(public viewController:ViewController,public popOver: PopoverController,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.passdata=this.navParams.get('pass')
    this.callback = this.navParams.get("ev")
    this.items = this.navParams.get('listData');
    console.log(this.passdata[0].currentmonth)
     

       if(localStorage.getItem('popovermonth')){
        this.month=localStorage.getItem('popovermonth');
       }else{
         this.month="lm"
       }

       if(localStorage.getItem('popoveranalysis')){
          this.analysis=localStorage.getItem('popoveranalysis');
      }else{
        this.analysis="all"
      }

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  kpiSubmit(item) {
    
    console.log(this.month)
    var arr=[];
    arr=[this.month,this.analysis]
  
    let data = arr;
    localStorage.setItem("popovermonth",this.month)
    localStorage.setItem("popoveranalysis",this.analysis)
  
    this.viewCtrl.dismiss(data);
  }
  }

  


