import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Popover, PopoverController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { BarchatsixPage } from '../barchatsix/barchatsix';
import { RestProvider } from '../../providers/rest/rest';
import { PopoverPage } from '../popover/popover';
import { FilterChartPage } from '../filter-chart/filter-chart';
/**
 * Generated class for the BarchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-barchat',
    templateUrl: 'barchat.html',
})
export class BarchatPage {
    @ViewChild('MTBF') MTBF;
    @ViewChild('PAvailability') PAvailability;
    @ViewChild('Utilization') Utilization;
    @ViewChild('SAccuracy') SAccuracy;

    @ViewChild('mtbr') mtbr;
    @ViewChild('mttr') mttr;
    @ViewChild('mttrf') mttrf;
    @ViewChild('scheduledOrplannedDowntime') scheduledOrplannedDowntime;
    month: any;
    barChartMTBF: any;
    barChartPAvailability: any;
    barChartUtilization: any;
    barChartSAccuracy: any;

    barChartmtbr: any;
    barChartmttr: any;
    barChartmttrf: any;
    barChartscheduledOrplannedDowntime: any;
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
    mtbsData: any;
    mttrfData: any;
    scheduledOrplannedDowntimeData: any;
    mttrData: any;
    pass: any;
    subha : any=''
    constructor(public pop: PopoverController, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
        this.month = "three"
        this.pass=this.navParams.get('pass')
    }

    ionViewDidLeave() {
        this.month = "three"
    }
    LoginRemCheck() {
        console.log(this.month);
        if (this.month == "six") {
            this.navCtrl.push(BarchatsixPage)
        }
    }
    ionViewDidLoad() {
        this.token = JSON.parse(localStorage.getItem('menu'))
        var formData = new FormData();
        formData.append('token', this.token);
        this.rest.kpiDashboardBar6View(formData).then(data => {
            this.sixMontharr = data['data'].label;
            this.DataGetSixMonth = data['data'].arrLast6Month;
            // console.log(data['data'])
        })
        this.rest.barChartThreeMonths(formData).then(data => {
            this.DataGet = data['data'].arrLast3Month;
             console.log(this.DataGet)
            this.mtbfdata  = this.DataGet[0].site[0].mtbf;
            this.paData    = this.DataGet[0].site[0].physical_availibity;
            this.saData    = this.DataGet[0].site[0].service_acuracy;
            this.utilData  = this.DataGet[0].site[0].utilization;
            this.mtbsData  = this.DataGet[0].site[0].mtbs;
            this.mttrfData = this.DataGet[0].site[0].mttrf;
            this.scheduledOrplannedDowntimeData = this.DataGet[0].site[0].scheduledOrplannedDowntime;
            this.mttrData  = this.DataGet[0].site[0].mttr
            this.lebel = data['data'].label;
            this.lebelthree = data['data'].label;
        }).then(() => {
            // console.log(this.utilData)

            this.barChartMTBF = new Chart(this.MTBF.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.mtbfdata,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });


            this.barChartPAvailability = new Chart(this.PAvailability.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.paData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });

            this.barChartUtilization = new Chart(this.Utilization.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.utilData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });


            this.barChartSAccuracy = new Chart(this.SAccuracy.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.saData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });




            //   new



            this.barChartmtbr = new Chart(this.mtbr.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: 'Click to Close the View',
                        data: this.mtbsData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });


            this.barChartmttr = new Chart(this.mttr.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.mttrData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });

            this.barChartmttrf = new Chart(this.mttrf.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.mttrfData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });


            this.barChartscheduledOrplannedDowntime = new Chart(this.scheduledOrplannedDowntime.nativeElement, {

                type: 'bar',
                data: {
                    labels: this.lebel,
                    datasets: [{
                        label: this.subha,
                        data: this.scheduledOrplannedDowntimeData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }

            });
        })

    }
    temp() {
        this.barChartMTBF = new Chart(this.MTBF.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mtbfdata,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartPAvailability = new Chart(this.PAvailability.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.paData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });

        this.barChartUtilization = new Chart(this.Utilization.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.utilData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartSAccuracy = new Chart(this.SAccuracy.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.saData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });



        this.barChartmtbr = new Chart(this.mtbr.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mtbsData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartmttr = new Chart(this.mttr.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mttrData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });

        this.barChartmttrf = new Chart(this.mttrf.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mttrfData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartscheduledOrplannedDowntime = new Chart(this.scheduledOrplannedDowntime.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.scheduledOrplannedDowntimeData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


    }
    tempsix() {
        this.barChartMTBF = new Chart(this.MTBF.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mtbfdata,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartPAvailability = new Chart(this.PAvailability.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.paData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });

        this.barChartUtilization = new Chart(this.Utilization.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.utilData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartSAccuracy = new Chart(this.SAccuracy.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.saData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        // ?sixmonth




        this.barChartmtbr = new Chart(this.mtbr.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mtbsData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartmttr = new Chart(this.mttr.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mttrData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });

        this.barChartmttrf = new Chart(this.mttrf.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.mttrfData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


        this.barChartscheduledOrplannedDowntime = new Chart(this.scheduledOrplannedDowntime.nativeElement, {

            type: 'bar',
            data: {
                labels: this.lebel,
                datasets: [{
                    label: this.subha,
                    data: this.scheduledOrplannedDowntimeData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(153, 224, 255)',
                        'rgb(179, 255, 238)',
                        'rgb(255, 228, 241)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgb(75, 98, 255)',
                        'rgb(124, 229, 255)',
                        'rgb(246, 123, 255)'

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        });


    }
    openPopover(ev) {
        console.log(this.DataGet)
        let listData = []
        let popover = this.pop.create(FilterChartPage, { "pass": this.pass,"ev":this.DataGet });

        popover.present({
            ev: this.DataGet
        });

        popover.onDidDismiss(data => {
            console.log(data)
            if (data['mtbf'].length == 6) {
                this.mtbfdata  = data['mtbf'];
                this.paData    = data['pa'];
                this.saData    = data['sa'];
                this.utilData  = data['util'];
                this.mtbsData  = data['mtbs'];
                this.mttrfData = data['mttrf'];
                this.scheduledOrplannedDowntimeData = data['scheduledOrplannedDowntime'];
                this.mttrData  = data['mttr'];
                this.name      = data['name'];
                this.lebel     = this.sixMontharr;
                this.tempsix();
            }
            else {
                this.mtbfdata    = data['mtbf'];
                this.paData      = data['pa'];
                this.saData      = data['sa'];
                this.utilData    = data['util'];
                this.mtbsData    = data['mtbs'];
                this.mttrfData   = data['mttrf'];
                this.scheduledOrplannedDowntimeData = data['scheduledOrplannedDowntime'];
                this.mttrData    = data['mttr'];
                this.name        = data['name'];
                this.lebel       = this.lebelthree;
                this.temp();
            }
            // this.analysidSelection=data[1];


            this.mtbsData    
            this.mttrfData   
            this.scheduledOrplannedDowntimeData
            this.mttrData  

            console.log(this.name);


        })
    }
}
