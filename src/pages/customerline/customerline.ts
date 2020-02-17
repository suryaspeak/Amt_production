import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Popover, PopoverController } from 'ionic-angular';

import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { BarresultPage } from '../barresult/barresult';

/**
 * Generated class for the CustomerlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerline',
  templateUrl: 'customerline.html',
})
export class CustomerlinePage {
  public Family: any;
    public family2: any;
    //   @ViewChild('barCanvas') barCanvas;
    // @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('MTBF') MTBF;
    @ViewChild('PAvailability') PAvailability;
    @ViewChild('Utilization') Utilization;
    @ViewChild('SAccuracy') SAccuracy;

    check: any;
    barChart: any;
    // doughnutChart: any;
    lineChart: any;
    lineChartPa: any;
    lineChartUt: any;
    lineChartSA: any;
    month: any;



    barChartMTBF: any;
    barChartPAvailability: any;
    barChartUtilization: any;
    barChartSAccuracy: any;
    token: any;
    lebel: any;
    DataGet: any;
    DataGetSixMonth: any;
    mtbfdata: any;
    paData: any;
    saData: any;
    utilData: any;
    sixMontharr: any;
    lebelthree: any;
    name: any;
    user_id:any;
  constructor(public pop:PopoverController,public rest: RestProvider, public nav: NavParams,public navParams: NavParams, public navCtrl: NavController) {
    this.user_id=this.navParams.get('user_id');
    this.check = this.nav.get('check');
    console.log(this.check)
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.month = "three";
    this.token = JSON.parse(localStorage.getItem('menu'))
    // this.user_id=this.navParams.get('user_id')
    // var formData = new FormData();
    // formData.append('token', this.token);
    // this.rest.kpiDashboardLineCurrentMonthView(formData).then(data=>{
    //     console.log(data)
    // })
 
 
 
 
  }
  ionViewDidLoad() {
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('user_id', this.user_id);
      this.rest.customerLineLastMonthView(formData).then(data=>{
          this.sixMontharr=data['data'].label;
          this.DataGetSixMonth=data['data'].arrLastMonth;
          console.log(data['data'])
      })
    this.rest.customerLineCurrentMonthView(formData).then(data => {
        console.log(data)
        this.DataGet = data['data'].arrCurrentMonth;

        this.mtbfdata = this.DataGet[0].site[0].mtbf;
         console.log(this.mtbfdata);
        this.paData = this.DataGet[0].site[0].physical_availibity;
        this.saData = this.DataGet[0].site[0].service_acuracy;
        this.utilData = this.DataGet[0].site[0].utilization;
        this.lebel = data['data'].label;
        this.lebelthree = data['data'].label;
    }).then(() => {



        this.lineChart = new Chart(this.MTBF.nativeElement, {

            type: 'line',
            data: {
                labels: this.lebel,
                datasets: [
                    {
                        label: 'Click to Close the View',
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
                        data: this.mtbfdata,
                        spanGaps: false,
                    }
                ]
            }

        });


        this.lineChartPa = new Chart(this.PAvailability.nativeElement, {

            type: 'line',
            data: {
                labels: this.lebel,
                datasets: [
                    {
                        label: 'Click to Close the View',
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
                        data: this.paData,
                        spanGaps: false,
                    }
                ]
            }

        });

        this.lineChartUt = new Chart(this.Utilization.nativeElement, {

            type: 'line',
            data: {
                labels: this.lebel,
                datasets: [
                    {
                        label: 'Click to Close the View',
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
                        data: this.utilData,
                        spanGaps: false,
                    }
                ]
            }

        });


        this.lineChartSA = new Chart(this.SAccuracy.nativeElement, {

            type: 'line',
            data: {
                labels: this.lebel,
                datasets: [
                    {
                        label: 'Click to Close the View',
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
                        data: this.saData,
                        spanGaps: false,
                    }
                ]
            }

        });
    })
}
temp(){


this.lineChart = new Chart(this.MTBF.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.mtbfdata,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartPa = new Chart(this.PAvailability.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.paData,
                spanGaps: false,
            }
        ]
    }

});

this.lineChartUt = new Chart(this.Utilization.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.utilData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartSA = new Chart(this.SAccuracy.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.saData,
                spanGaps: false,
            }
        ]
    }

});

}
tempsix(){


this.lineChart = new Chart(this.MTBF.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.mtbfdata,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartPa = new Chart(this.PAvailability.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.paData,
                spanGaps: false,
            }
        ]
    }

});

this.lineChartUt = new Chart(this.Utilization.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.utilData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartSA = new Chart(this.SAccuracy.nativeElement, {

    type: 'line',
    data: {
        labels: this.lebel,
        datasets: [
            {
                label: 'Click to Close the View',
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
                data: this.saData,
                spanGaps: false,
            }
        ]
    }

});

}
LoginRemCheck(item) {
    console.log(this.month)
}
openPopover(ev) {
    console.log(this.DataGet)
    let listData = []
    let popover = this.pop.create(BarresultPage,{"ev":this.DataGet,"sixmonth":this.sixMontharr,"evsix":this.DataGetSixMonth});
  
      popover.present({
        ev: this.DataGet
      });
  
      popover.onDidDismiss(data => {
          console.log(data)
          if(data['mtbf'].length==6){
            this.mtbfdata=data['mtbf'];
            this.paData=data['pa'];
            this.saData=data['sa'];
            this.utilData=data['util'];
            this.name=data['name'];
            this.lebel=this.sixMontharr;
            this.tempsix();
          }
          else{
            this.mtbfdata=data['mtbf'];
            this.paData=data['pa'];
            this.saData=data['sa'];
            this.utilData=data['util'];
            this.name=data['name'];
            this.lebel=this.lebelthree;
            this.temp();
          }
        // this.analysidSelection=data[1];
       

       
  
      console.log(this.name);
    
    
    })
  }

}
