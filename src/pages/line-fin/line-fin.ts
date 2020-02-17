
import { RestProvider } from '../../providers/rest/rest';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Popover, PopoverController } from 'ionic-angular';
import { ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { LinepopoverPage } from '../linepopover/linepopover';

/**
 * Generated class for the LineFinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-line-fin',
  templateUrl: 'line-fin.html',
})
export class LineFinPage {
  @ViewChild('marcbilling') marcbilling;
  @ViewChild('managmentfee') managmentfee;
//   @ViewChild('costofsales') costofsales;
  @ViewChild('grossmargin') grossmargin;
  @ViewChild('frossmarginper') frossmarginper;
//   @ViewChild('indircect') indircect;
//   @ViewChild('netmargin') netmargin;
//   @ViewChild('netmarginper') netmarginper;

  linemarcbilling: any;
  linemanagmentfee: any;
  linecostofsales: any;
  linegrossmargin: any;
  linefrossmarginper: any;
  lineindircect: any;
  linenetmargin: any;
  linenetmarginper: any;
 pass: any;
  token:any;
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
  total_sale:any;
  month:any;
  constructor(public pop:PopoverController,public rest: RestProvider, public nav: NavParams, public navCtrl: NavController) {
    this.token=JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    this.pass=this.nav.get('pass')
  }


  ionViewDidLoad(){
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpiDashboardLineFinancial(formData).then(data=>{
      console.log(data['data'].count_arrLast6Month)
      if(data['data'].count_arrLast6Month=='0'){
      
        
      }
      else{
        this.month=data['data'].label.reverse();
        this.branch=data['data'].arrLast6Month[0].branch;
        this.SalesArr=data['data'].arrLast6Month[0].cost_of_sale;
        this.total_sale=data['data'].arrLast6Month[0].total_sale.reverse();
        console.log(this.total_sale)
        this.management_feeArr=data['data'].arrLast6Month[0].management_fee;
        this.cost_of_saleArr=data['data'].arrLast6Month[0].cost_of_sale;
        this.net_margin=data['data'].arrLast6Month[0].net_margin;
        this.net_margin_percent=data['data'].arrLast6Month[0].net_margin_percent;
        this.indirect_expense=data['data'].arrLast6Month[0].indirect_expense;
        this.gross_margin=data['data'].arrLast6Month[0].gross_margin.reverse();
        this.gross_margin_percent=data['data'].arrLast6Month[0].gross_margin_percent.reverse();
        this.arrLast6Month=data['data'].arrLast6Month.reverse();
      }
    

      
    }).then(()=>{

      this.linemarcbilling = new Chart(this.marcbilling.nativeElement, {

        type: 'line',
        data: {
            labels: this.month,
            datasets: [
                {
                    label: "Total Sales",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.total_sale,
                    spanGaps: false,
                }
            ]
        }
  
    });
  
 
  
  this.linegrossmargin = new Chart(this.grossmargin.nativeElement, {
  
    type: 'line',
    data: {
        labels: this.month,
        datasets: [
            {
              label: "Gross Margin",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.gross_margin,
                spanGaps: false,
            }
        ]
    }
  
  });
  

  
    })


  }

  sexMonthLine(){


    this.linemarcbilling = new Chart(this.marcbilling.nativeElement, {

      type: 'line',
      data: {
          labels: this.month,
          datasets: [
              {
                label: "Total Sales",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.total_sale,
                  spanGaps: false,
              }
          ]
      }

  });

this.linegrossmargin = new Chart(this.grossmargin.nativeElement, {

  type: 'line',
  data: {
      labels: this.month,
      datasets: [
          {
            label: "Gross Margin",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.gross_margin,
              spanGaps: false,
          }
      ]
  }

});



// this.lineindircect = new Chart(this.indircect.nativeElement, {

//   type: 'line',
//   data: {
//       labels: this.month,
//       datasets: [
//           {
//               label: "My First dataset",
//               fill: false,
//               lineTension: 0.1,
//               backgroundColor: "rgba(75,192,192,0.4)",
//               borderColor: "rgba(75,192,192,1)",
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: "rgba(75,192,192,1)",
//               pointBackgroundColor: "#fff",
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: "rgba(75,192,192,1)",
//               pointHoverBorderColor: "rgba(220,220,220,1)",
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: this.indirect_expense,
//               spanGaps: false,
//           }
//       ]
//   }

// });
// this.linenetmargin = new Chart(this.netmargin.nativeElement, {

//   type: 'line',
//   data: {
//       labels: this.month,
//       datasets: [
//           {
//               label: "My First dataset",
//               fill: false,
//               lineTension: 0.1,
//               backgroundColor: "rgba(75,192,192,0.4)",
//               borderColor: "rgba(75,192,192,1)",
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: "rgba(75,192,192,1)",
//               pointBackgroundColor: "#fff",
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: "rgba(75,192,192,1)",
//               pointHoverBorderColor: "rgba(220,220,220,1)",
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: this.net_margin,
//               spanGaps: false,
//           }
//       ]
//   }

// });

// this.linenetmarginper = new Chart(this.netmarginper.nativeElement, {

//   type: 'line',
//   data: {
//       labels: this.month,
//       datasets: [
//           {
//               label: "My First dataset",
//               fill: false,
//               lineTension: 0.1,
//               backgroundColor: "rgba(75,192,192,0.4)",
//               borderColor: "rgba(75,192,192,1)",
//               borderCapStyle: 'butt',
//               borderDash: [],
//               borderDashOffset: 0.0,
//               borderJoinStyle: 'miter',
//               pointBorderColor: "rgba(75,192,192,1)",
//               pointBackgroundColor: "#fff",
//               pointBorderWidth: 1,
//               pointHoverRadius: 5,
//               pointHoverBackgroundColor: "rgba(75,192,192,1)",
//               pointHoverBorderColor: "rgba(220,220,220,1)",
//               pointHoverBorderWidth: 2,
//               pointRadius: 1,
//               pointHitRadius: 10,
//               data: this.net_margin_percent,
//               spanGaps: false,
//           }
//       ]
//   }

// });


  }
  openPopover(ev) {
    console.log(this.pass)
    let popover = this.pop.create(LinepopoverPage, { listData:this.arrLast6Month,pass:this.pass });
  
      popover.present({
        ev: ev
      });
  
      popover.onDidDismiss(data => {
        console.log(data)
         if(data[2]=="lastQuarter"){
          this.branch=data[1];
  
          this.SalesArr=data[0].cost_of_sale;
          this.total_sale=data[0].total_sale;
          console.log(this.total_sale)
          this.management_feeArr=data[0].management_fee;
          this.cost_of_saleArr=data[0].cost_of_sale;
          this.net_margin=data[0].net_margin;
          this.net_margin_percent=data[0].net_margin_percent;
          this.indirect_expense=data[0].indirect_expense;
          this.gross_margin=data[0].gross_margin;
          this.gross_margin_percent=data[0].gross_margin_percent;
         }
       else{
         console.log("HI")
      
        this.branch=data[1];
        this.SalesArr=data[0].cost_of_sale;
        this.total_sale=data[0].total_sale;
        this.management_feeArr=data[0].management_fee;
        this.cost_of_saleArr=data[0].cost_of_sale;
        this.net_margin=data[0].net_margin;
        this.net_margin_percent=data[0].net_margin_percent;
        this.indirect_expense=data[0].indirect_expense;
        this.gross_margin=data[0].gross_margin;
        this.gross_margin_percent=data[0].gross_margin_percent;
        // this.arrLast6Month=data['data'].arrLast6Month;
        this.sexMonthLine();
       }
         
        
  

 
    })
  }

}
