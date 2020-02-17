import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the BackloglinenintyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backloglineninty',
  templateUrl: 'backloglineninty.html',
})
export class BackloglinenintyPage {
  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;

  public lineChartData:Array<any> = [
    {data: [5, 34, 166, 0, 45, 0], label: 'Series A'},
    {data: [0, 0, 43, 0, 0, 0], label: 'Series B'},
    {data: [12, 0, 34, 0, 66, 0], label: 'Series C'},
   
  ];
  BacklogStatus:any;
  CheckName:any;
  public lineChartLabels:Array<any> =[ "Jan", "Dec", "Nov", "Oct", "Sep", "Aug"];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // red
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor:  'rgb(182,11,37)',
      pointBackgroundColor:  'rgb(182,11,37)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor:  'rgb(182,11,37)'
    },
    { // dark Blue
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor:  'rgb(49,86,235)',
      pointBackgroundColor: 'rgb(49,86,235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor:  'rgb(49,86,235)'
    },
    { // green
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgb(75,157,20)',
      pointBackgroundColor: 'rgb(75,157,20)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(75,157,20)',
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  DATE: any;
  siteName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.DATE=this.navParams.get("data");
  this.siteName=this.DATE[0].data.site


 this.lineChartData = [
    {data: this.DATE[0].data.greaterThan30Days, label: '> 30 Days'},
    {data: this.DATE[0].data.greaterThan60Days, label: '> 60 Days'},
    {data: this.DATE[0].data.greaterThan90Days, label: '> 90 Days'},
   
  ];
  console.log(this.DATE)
  }

 

}
