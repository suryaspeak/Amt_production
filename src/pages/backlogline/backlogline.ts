import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BackloglinepopoverPage } from '../backloglinepopover/backloglinepopover';

import { BackloglinenintyPage } from '../backloglineninty/backloglineninty';
/**
 * Generated class for the BackloglinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backlogline',
  templateUrl: 'backlogline.html',
})
export class BackloglinePage {
  pass: any;



  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;

  public lineChartData:Array<any> = [
    {data: [5, 34, 166, 0, 45, 0], label: 'Series A'},
    {data: [0, 0, 43, 0, 0, 0], label: 'Series B'},
    {data: [12, 0, 34, 0, 66, 0], label: 'Series C'},
    {data: [0, 0, 0, 0, 0, 0], label: 'Series D'},
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
    },

    { // green
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgba(255,0,255,0.3)',
      pointBackgroundColor: 'rgba(255,0,255,0.3)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,255,0.3)',
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  token:any;
  Execution_gen_month:any;
  Generation:any;
  total_execution:any;
  total_pending:any;
  siteName:any;
  BacklogAge:any;
  BacklogAllData:any;
  label_BacklogAge:any;
  label_BacklogAge60:any;
  label_BacklogAge90:any;
  constructor(public pop:PopoverController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.kpiDashboardLineBacklog(formData).then(data=>{
      this.lineChartLabels=data['data'].label_BacklogStatus;
      this.BacklogAge=data['data'].BacklogAge
      this.siteName=data['data'].BacklogStatus[0].site;
      this.Execution_gen_month=data['data'].BacklogStatus[0].Execution_gen_month;
      this.Generation=data['data'].BacklogStatus[0].Generation;
      this.total_execution=data['data'].BacklogStatus[0].total_execution;
      this.total_pending=data['data'].BacklogStatus[0].total_pending;
      this.BacklogAllData=data['data'].BacklogStatus;
      this.label_BacklogAge=data['data'].label_BacklogAge;
     

      console.log(data['data'].BacklogAge)
    }).then(()=>{
      console.log(this.lineChartLabels)
      this.lineChartData = [
        {data: this.Execution_gen_month, label: 'Execution gen month'},
        {data: this.Generation, label: 'Generation'},
        {data: this.total_execution, label: 'total execution'},
        {data: this.total_pending, label: 'Total pending'},
      ];
      console.log( this.lineChartData)
    })
  
    // this.lineChartData = [
    //   {data: [0, 0, 0, 0, 0, 0], label: 'Series A'},
    //   {data: [0, 0, 0, 0, 0, 0], label: 'Series B'},
    //   {data: [0, 0, 0, 0, 0, 0], label: 'Series C'},
    //   {data: [0, 0, 0, 0, 0, 0], label: 'Series D'},
    // ];
    // console.log(this.lineChartData)

  }

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  tempokok(){
    this.lineChartData = [
      {data: this.Execution_gen_month, label: 'Execution gen month'},
      {data: this.Generation, label: 'Generation'},
      {data: this.total_execution, label: 'total execution'},
      {data: this.total_pending, label: 'Total pending'},
    ];
  }

  openPopover(ev) {
       this.pass=this.navParams.get('pass')
    let popover = this.pop.create(BackloglinepopoverPage,{"datapass":this.BacklogAge,"lineChartData":this.BacklogAllData,pass:this.pass});
  
      popover.present({
        ev: ev
      });
  
      popover.onDidDismiss(data => {
     
        this.CheckName=data[0];
        if(data[0]=="backlogstatus"){
          this.siteName=data[2];
          console.log(data.greaterThan90Days)
          this.lineChartData = [
            {data: data[1].Execution_gen_month, label: 'Execution gen month'},
            {data: data[1].Generation, label: 'Generation'},
            {data: data[1].total_execution, label: 'Total Execution'},
            {data: data[1].total_pending, label: 'Total pending'}
  
  
          
          ];
        }
        else{
         console.log(data)
         var arr=[{"data" : data[1],"lebel":this.label_BacklogAge,"siteName":data[3],"date":"90 days data"}]
         console.log(arr)

        
        this.navCtrl.push(BackloglinenintyPage,{"data":arr})
        }
      
 
    })
  }


  
}
