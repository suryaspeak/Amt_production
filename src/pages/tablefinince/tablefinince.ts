import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MenuController, ViewController, PopoverController, Slides  } from 'ionic-angular';
import { TablefinincepopoverPage } from '../tablefinincepopover/tablefinincepopover';
/**
 * Generated class for the TablefinincePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablefinince',
  templateUrl: 'tablefinince.html',
})
export class TablefinincePage {
  token:any;
  month:any;
  SalesArr:any;
  management_feeArr:any;
  cost_of_saleArr:any;
  net_margin:any;
  net_margin_percent:any;
  indirect_expense:any;
  gross_margin:any;
  gross_margin_percent:any;
  branch:any;
  arrLast6Month:any;
  marc_billing:any;
  tabletypecheck:boolean=false;
  pass: any;
  tableViewName:any="Last 6 Month"
  data: Array<{icon: string, showDetails: boolean}> = [];
  data2: Array<{icon: string, showDetails: boolean}> = [];
  data3: Array<{icon: string, showDetails: boolean}> = [];
  data4: Array<{icon: string, showDetails: boolean}> = [];
  data5: Array<{icon: string, showDetails: boolean}> = [];
  data6: Array<{icon: string, showDetails: boolean}> = [];
  data7: Array<{icon: string, showDetails: boolean}> = [];
  data8: Array<{icon: string, showDetails: boolean}> = [];
  constructor(public popOver: PopoverController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token=JSON.parse(localStorage.getItem('menu'))
    this.pass=this.navParams.get('pass');
    console.log(this.token)
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpiDashboardTabularFinancial(formData).then(data=>{
      this.month=data['data'].label.reverse();
      this.branch=data['data'].arrLast6Month[0].branch;
      this.SalesArr=data['data'].arrLast6Month[0].marc_billing.reverse();
      this.management_feeArr=data['data'].arrLast6Month[0].management_fee.reverse();
      this.cost_of_saleArr=data['data'].arrLast6Month[0].cost_of_sale.reverse();
      this.net_margin=data['data'].arrLast6Month[0].net_margin.reverse();
      this.net_margin_percent=data['data'].arrLast6Month[0].net_margin_percent.reverse();
      this.indirect_expense=data['data'].arrLast6Month[0].indirect_expense.reverse();
      this.gross_margin=data['data'].arrLast6Month[0].gross_margin.reverse();
      this.gross_margin_percent=data['data'].arrLast6Month[0].gross_margin_percent.reverse();
      this.arrLast6Month=data['data'].arrLast6Month;
      console.log(data)
    })
  
      this.data.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data2.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data3.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data4.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data5.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data6.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data7.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
      this.data8.push({
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
   
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablefinincePage');
  }
  toggleDetails(data,postion) {
   
    if(postion=='one'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='two'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='three'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='four'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='five'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='six'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else if(postion=='seven'){
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
    else{
      if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
      } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
      }
    }
   
  }

  openPopover(ev) {
    console.log(this.arrLast6Month)
    let popover = this.popOver.create(TablefinincepopoverPage, { listData:this.arrLast6Month,pass:this.pass });
  
      popover.present({
        ev: ev
      });
  
      popover.onDidDismiss(data => {
        console.log(data)
         if(data[2]=="lastQuarter"){
          this.tableViewName="Last Quarter";
          this.branch=data[1];
           this.tabletypecheck=true;
          this.SalesArr=data[0].cost_of_sale;
          this.marc_billing=data[0].marc_billing;
          this.management_feeArr=data[0].management_fee;
          this.cost_of_saleArr=data[0].cost_of_sale;
          this.net_margin=data[0].net_margin;
          this.net_margin_percent=data[0].net_margin_percent;
          this.indirect_expense=data[0].indirect_expense;
          this.gross_margin=data[0].gross_margin;
          this.gross_margin_percent=data[0].gross_margin_percent;
         }
       else{
        if(data[3]=='site'){
          console.log(data)
          this.tableViewName="Last 6 Month";
          this.tabletypecheck=false;
          this.branch=data[1];
          this.SalesArr=data[0].marc_billing.reverse();
          this.management_feeArr=data[0].management_fee.reverse();
          this.cost_of_saleArr=data[0].cost_of_sale.reverse();
          this.net_margin=data[0].net_margin.reverse();
          this.net_margin_percent=data[0].net_margin_percent.reverse();
          this.indirect_expense=data[0].indirect_expense.reverse();
          this.gross_margin=data[0].gross_margin.reverse();
          this.gross_margin_percent=data[0].gross_margin_percent.reverse();
        }else{
          console.log(data)
          this.tableViewName="Last 6 Month";
          this.tabletypecheck=false;
          this.branch=data[1];
          this.SalesArr=data[0].marc_billing;
          this.management_feeArr=data[0].management_fee;
          this.cost_of_saleArr=data[0].cost_of_sale;
          this.net_margin=data[0].net_margin;
          this.net_margin_percent=data[0].net_margin_percent;
          this.indirect_expense=data[0].indirect_expense;
          this.gross_margin=data[0].gross_margin;
          this.gross_margin_percent=data[0].gross_margin_percent;
        }
       
        // this.arrLast6Month=data['data'].arrLast6Month;
       
       }
         
        
        console.log(this.SalesArr)

 
    })
  }
  radioChecked(){
    console.log("oko")
  }
}
