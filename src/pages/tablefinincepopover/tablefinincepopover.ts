import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TablefinincepopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablefinincepopover',
  templateUrl: 'tablefinincepopover.html',
})
export class TablefinincepopoverPage {
  listDataget:any;
  token:any;
  kpiDashboardTabularQuarterFinancial:any;
  checkvalue:any;
  type:any;
  getarr: any=[];
  bos : any;
  pass: any;
  typeonce : any;
  sitehideshow : boolean=false;
  fleedideshow : boolean=false;
  constructor(public viewController:ViewController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.listDataget=this.navParams.get('listData');
    this.pass=this.navParams.get('pass')
    this.type='sixmonth'
    this.token=JSON.parse(localStorage.getItem('menu'))
    console.log(this.pass)
    var formData = new FormData();
    formData.append('token', this.token);
   this.rest.kpiDashboardTabularQuarterFinancial(formData).then(data=>{
     this.kpiDashboardTabularQuarterFinancial=data['data'].lastQuarter
      console.log(data)
    })
    console.log(this.listDataget)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablefinincepopoverPage');
  }
  radioChecked(value){
    console.log(this.kpiDashboardTabularQuarterFinancial)
    this.checkvalue=value;
   if(value=='lastQuarter'){
    this.listDataget='';
     this.listDataget=this.kpiDashboardTabularQuarterFinancial;
   
   }
   else{
     this.listDataget='';
    this.listDataget=this.navParams.get('listData');
    console.log(this.listDataget)
   }
  }
  getValue(Value,data,selectType){
    console.log(selectType)
  this.getarr=[Value,data,this.type,selectType]
   
  }
  submit(){
  
    if(this.getarr.length=="0"){
      alert("Please select either branch or site")
    }else{
      this.viewController.dismiss(this.getarr)
    }
    // this.viewController.dismiss(this.getarr)
  }
  sitehide(){
    this.sitehideshow=true;
    this.fleedideshow=false;
  }
  fleedhide(){
    this.fleedideshow=true;
    this.sitehideshow=false;
  }
}
