import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-linepopover',
  templateUrl: 'linepopover.html',
})
export class LinepopoverPage {
  listDataget:any;
  token:any;
  kpiDashboardTabularQuarterFinancial:any;
  checkvalue:any;
  type:any;
  arrget: any =[];
  pass: any;
  sitehideshow : boolean=false;
  fleedideshow : boolean=false;
  constructor(public viewController:ViewController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.pass=this.navParams.get('pass');
    this.listDataget=this.navParams.get('listData');
    this.type='sixmonth'
    this.token=JSON.parse(localStorage.getItem('menu'))
    console.log(this.pass)
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpiDashboardLineQuarterFinancial(formData).then(data=>{
     this.kpiDashboardTabularQuarterFinancial=data['data'].lastQuarterLine
      console.log(data)
    })
    console.log(this.listDataget)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinepopoverPage');
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
  getValue(Value,data){
    this.arrget=[Value,data,this.type]
 
    console.log(Value)
  }
  sitehide(){
    this.sitehideshow=true;
    this.fleedideshow=false;
  }
  fleedhide(){
    this.fleedideshow=true;
    this.sitehideshow=false;
  }
  submit(){
    this.viewController.dismiss(this.arrget);
  }
}
