import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Popover, PopoverController } from 'ionic-angular';

import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { BarresultPage } from '../barresult/barresult';
/**
 * Generated class for the LinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-line',
  templateUrl: 'line.html',
})

export class LinePage {
  public Family: any;
  public family2: any;
  pass: any;
  //   @ViewChild('barCanvas') barCanvas;
  // @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('MTBF') MTBF;
  @ViewChild('PAvailability') PAvailability;
  @ViewChild('Utilization') Utilization;
  @ViewChild('SAccuracy') SAccuracy;


  @ViewChild('MTBS') MTBS;
  @ViewChild('MTTR') MTTR;
  @ViewChild('MTTRF') MTTRF;
  @ViewChild('scheduledopnan') scheduledopnan;
  check: any;
  barChart: any;
  // doughnutChart: any;
  lineChart: any;
  lineChartPa: any;
  lineChartUt: any;
  header: any;
  lineChartSA: any;
  month: any;
  mtbsData: any;
  mttrfData: any;
  scheduledOrplannedDowntimeData: any;
  mttrData: any;


 

  lineChartMTBS: any;
  lineChartMTTR: any;
  lineChartMTTRF: any;
  lineChartscheduledopnan: any;
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
  constructor(public pop:PopoverController,public rest: RestProvider, public nav: NavParams, public navCtrl: NavController) {
    this.check = this.nav.get('check');
    this.pass=this.nav.get('pass');
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.month = "three";
    this.token = JSON.parse(localStorage.getItem('menu'))
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
      this.rest.kpiDashboardLineLastMonthMeasurement(formData).then(data=>{
          this.sixMontharr=data['data'].label;
          this.DataGetSixMonth=data['data'].arrLastMonth;
          console.log(data['data'])
      })
    this.rest.kpiDashboardLineCurrentMonthMeasurement(formData).then(data => {
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



        // nklsdfslkfj

        this.lineChartMTBS = new Chart(this.MTBS.nativeElement, {

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
                      data: this.mtbsData,
                      spanGaps: false,
                  }
              ]
          }

      });


      this.lineChartMTTR = new Chart(this.MTTR.nativeElement, {

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
                      data: this.mttrData,
                      spanGaps: false,
                  }
              ]
          }

      });

      this.lineChartMTTRF = new Chart(this.MTTRF.nativeElement, {

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
                      data: this.mttrfData,
                      spanGaps: false,
                  }
              ]
          }

      });


      this.lineChartscheduledopnan = new Chart(this.scheduledopnan.nativeElement, {

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
                      data: this.scheduledOrplannedDowntimeData,
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


this.lineChartMTBS = new Chart(this.MTBS.nativeElement, {

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
                data: this.mtbsData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartMTTR = new Chart(this.MTTR.nativeElement, {

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
                data: this.mttrData,
                spanGaps: false,
            }
        ]
    }

});

this.lineChartMTTRF = new Chart(this.MTTRF.nativeElement, {

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
                data: this.mttrfData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartscheduledopnan = new Chart(this.scheduledopnan.nativeElement, {

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
                data: this.scheduledOrplannedDowntimeData,
                spanGaps: false,
            }
        ]
    }

});


}
tempsix(){

 console.log("sixtemp");
 console.log(this.sixMontharr)
this.lineChart = new Chart(this.MTBF.nativeElement, {

    type: 'line',
    data: {
        labels: this.sixMontharr,
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
        labels: this.sixMontharr,
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
        labels: this.sixMontharr,
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
        labels: this.sixMontharr,
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

this.lineChartMTBS = new Chart(this.MTBS.nativeElement, {

    type: 'line',
    data: {
        labels: this.sixMontharr,
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
                data: this.mtbsData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartMTTR = new Chart(this.MTTR.nativeElement, {

    type: 'line',
    data: {
        labels: this.sixMontharr,
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
                data: this.mttrData,
                spanGaps: false,
            }
        ]
    }

});

this.lineChartMTTRF = new Chart(this.MTTRF.nativeElement, {

    type: 'line',
    data: {
        labels: this.sixMontharr,
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
                data: this.mttrfData,
                spanGaps: false,
            }
        ]
    }

});


this.lineChartscheduledopnan = new Chart(this.scheduledopnan.nativeElement, {

    type: 'line',
    data: {
        labels: this.sixMontharr,
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
                data: this.scheduledOrplannedDowntimeData,
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
   
    let listData = []
    let popover = this.pop.create(BarresultPage,{"ev":this.DataGet,"sixmonth":this.sixMontharr,"evsix":this.DataGetSixMonth,"pass":this.pass});
  
      popover.present({
        ev: this.DataGet
      });
        console.log(this.sixMontharr);
        console.log(this.lebelthree);
      popover.onDidDismiss(data => {
          console.log(data)
          if(data['checkmonth']=="six"){
            this.header="Last Month";
            this.mtbfdata=data['mtbf'];
            this.paData=data['pa'];
            this.saData=data['sa'];
            this.utilData=data['util'];
            this.mtbsData  = data['mtbs'];
            this.mttrfData = data['mttrf'];
            this.scheduledOrplannedDowntimeData = data['scheduledOrplannedDowntime'];
            this.mttrData  = data['mttr'];
            this.name=data['name'];
            this.lebel=this.sixMontharr;
            this.tempsix();
          }
          else{
          
            this.header="Current Month"
            this.mtbfdata=data['mtbf'];
            this.paData=data['pa'];
            this.saData=data['sa'];
            this.utilData=data['util'];
            this.mtbsData  = data['mtbs'];
            this.mttrfData = data['mttrf'];
            this.scheduledOrplannedDowntimeData = data['scheduledOrplannedDowntime'];
            this.mttrData  = data['mttr'];
            this.name=data['name'];
            this.lebel=this.lebelthree;
            this.temp();
          }
        // this.analysidSelection=data[1];
       

       
  
      console.log(this.name);
    
    
    })
  }

}
