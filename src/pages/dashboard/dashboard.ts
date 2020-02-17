import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TableviewPage } from '../tableview/tableview';
import { BarchatPage } from '../barchat/barchat';
import { LinePage } from '../line/line';
import { TablefinincePage } from '../tablefinince/tablefinince';

import { LineFinPage } from '../line-fin/line-fin';
import { BacklogtablePage } from '../backlogtable/backlogtable';
import { BackloglinePage } from '../backlogline/backlogline';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  token: any;
  finacialKpiLine :boolean=false;
  backlogKpiline: boolean=false;
  permissionadminbar : any;
  permissionadminline: any;
  permissionadmintabular: any;
  backlogline: any;
  backlogtabular : any;
  customerline: any;
  customertabular: any;
  financialline : any;
   financialtabular: any;
   arrpur: any;
  constructor(public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
   
    this.token=JSON.parse(localStorage.getItem('menu'));
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpiDashboardLineFinancial(formData).then(data=>{
      
      if(data['data'].count_arrLast6Month=='0'){
       this.finacialKpiLine=false;
      }
      else{
        this.finacialKpiLine=true;
      }
    })
    this.rest.kpiDashboardLineBacklog(formData).then(data=>{
      if(data['data'].count_arrLast6Month=='0'){
        this.backlogKpiline=false;
       }
       else{
         this.backlogKpiline=true;
       }
     
    })

    this.rest.kpipermission(formData).then(data=>{
      // this.permission=data['data'].KPI_Permission[0];
      this.permissionadminbar=data['data'].KPI_Permission[0].admin_bar;
      this.permissionadminline=data['data'].KPI_Permission[0].admin_line;
      this.permissionadmintabular=data['data'].KPI_Permission[0].admin_tabular;
      this.backlogline=data['data'].KPI_Permission[0].backlog_line;
      this.backlogtabular =data['data'].KPI_Permission[0].backlog_tabular;
      this.customerline=data['data'].KPI_Permission[0].customer_line;
      this.customertabular=data['data'].KPI_Permission[0].customer_tabular;
      this.financialline =data['data'].KPI_Permission[0].financial_line;
      this.financialtabular=data['data'].KPI_Permission[0].financial_tabular;

      // console.log(this.permission)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  table(){
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpipermission(formData)
    this.rest.kpipermission(formData).then(data=>{

this.arrpur=[
 { "currentmonth":data['data'].KPI_Permission[0].AdminTabularCurrentMonthKPI},
  {"tabularlastmonth":data['data'].KPI_Permission[0].AdminTabularLastMonthKPI},
  {"TabularLast3Month":data['data'].KPI_Permission[0].AdminTabularLast3MonthKPI},
  {"TabularLast6Month":data['data'].KPI_Permission[0].AdminTabularLast6MonthKPI}

]
     
      console.log(this.arrpur)
    }).then(()=>{
      this.navCtrl.push(TableviewPage,{pass:this.arrpur})
    })
   
  }
  bar(){
    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
  

this.arrpur=[
 { "AdminBarLast3MonthKPI":data['data'].KPI_Permission[0].AdminBarLast3MonthKPI},
  {"AdminBarLast6MonthKPI":data['data'].KPI_Permission[0].AdminBarLast6MonthKPI},


]
     
      console.log(this.arrpur)
    }).then(()=>{
    this.navCtrl.push(BarchatPage,{pass:this.arrpur})
    })
  }
  line(){
    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
      // AdminLineCurrentMonthKPI : "1"
      // AdminLineLastMonthKPI : "0"

this.arrpur=[
 { "AdminLineCurrentMonthKPI":data['data'].KPI_Permission[0].AdminLineCurrentMonthKPI},
  {"AdminLineLastMonthKPI":data['data'].KPI_Permission[0].AdminLineLastMonthKPI},


]
     
      console.log(this.arrpur)
    }).then(()=>{
    this.navCtrl.push(LinePage,{pass:this.arrpur})
    })
  }
  Financialtable(){
    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
    

this.arrpur=[
 { "AdminFin6MonthKPI":data['data'].KPI_Permission[0].AdminFin6MonthKPI},
  {"AdminFinLastQuaterKPI":data['data'].KPI_Permission[0].AdminFinLastQuaterKPI},


]
     
      console.log(this.arrpur)
    }).then(()=>{
    this.navCtrl.push(TablefinincePage,{pass:this.arrpur})
    })
  }
  LineChat(){

    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
    this.arrpur=[
      { "AdminFin6MonthKPI_Line":data['data'].KPI_Permission[0].AdminFin6MonthKPI_Line},
       {"AdminFinLastQuaterKPI_Line":data['data'].KPI_Permission[0].AdminFinLastQuaterKPI_Line},
     
     
     ]
          
           console.log(this.arrpur)
         }).then(()=>{
    this.navCtrl.push(LineFinPage,{pass:this.arrpur})
         })
  }
  BacklocTable(){
    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
  
 
this.arrpur=[
 { "AdminBacklogTabularCurrentMonth":data['data'].KPI_Permission[0].AdminBacklogTabularCurrentMonth},
  {"AdminBacklogTabularLastMonth":data['data'].KPI_Permission[0].AdminBacklogTabularLastMonth},


]
     
      console.log(this.arrpur)
    }).then(()=>{
    this.navCtrl.push(BacklogtablePage,{pass:this.arrpur})
    })
  }
  BacklocLine(){
    var formData = new FormData();
    formData.append('token', this.token);
   
    this.rest.kpipermission(formData).then(data=>{
      // AdminBacklogStatusLine : "1"
      // AdminBacklogAgeLine : "0"
 
this.arrpur=[
 { "AdminBacklogStatusLine":data['data'].KPI_Permission[0].AdminBacklogStatusLine},
  {"AdminBacklogAgeLine":data['data'].KPI_Permission[0].AdminBacklogAgeLine},


]
     
      console.log(this.arrpur)
    }).then(()=>{
    this.navCtrl.push(BackloglinePage,{pass:this.arrpur})
    })
  }
}
