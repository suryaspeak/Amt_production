import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { JobPage } from '../pages/job/job';
import { SettingsPage } from '../pages/settings/settings';
import { CustomerPage } from '../pages/customer/customer';
import { TaskPage } from '../pages/task/task';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EventPage } from '../pages/event/event';
import { InspectionsPage } from '../pages/inspections/inspections';
import { Network } from '@ionic-native/network';
import { RestProvider } from '../providers/rest/rest';
import { ToastController } from 'ionic-angular';
import { AssignenginerPage } from '../pages/assignenginer/assignenginer';
import { MajorcomponentPage } from '../pages/majorcomponent/majorcomponent';
import { MajorcomponentfilterPage } from '../pages/majorcomponentfilter/majorcomponentfilter';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;
  pages: any = [];
  // pages: Array<{name: string, component: any,icon:string}>;

  constructor(public toastCtrl: ToastController, public network: Network, public events: Events, public rest: RestProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();
  
  }
  presentModal() {
    const modal = this.modalCtrl.create(JobPage);
    modal.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.someFunction();
      }, 3600000);

      if(localStorage.getItem('menu')){
        this.nav.setRoot(HomePage)
      }
      else{
        this.nav.setRoot(LoginPage)
      }
      this.statusBar.backgroundColorByHexString('#ffffff');


      this.rest.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {
        const toast = this.toastCtrl.create({
          message: 'You are offline',
          duration: 3000
        });
        toast.present();
        //  alert('network:offline ==> '+this.network.type);    
      });

      // Online event
      this.events.subscribe('network:online', () => {
        const toast = this.toastCtrl.create({
          message: 'You are online via' + this.network.type,
          duration: 3000
        });
        toast.present();

      });



      setInterval(() => {
        if (localStorage.getItem('home')) {

          this.pages = JSON.parse(localStorage.getItem('home'))
        } else {
          //  console.log("NEW D")
        }

      }, 1000);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  someFunction(){
    this.nav.setRoot(LoginPage)
  }
  openPage(page) {
    console.log(page.id)

    if (page.id == "2") {
      // this.navCtrl.push(BreakPage)
    }
    if (page.id == "8") {
      // this.navCtrl.push(ViewassetsPage)
    }
    if (page.id == "10") {
      // this.navCtrl.push(FeedbackPage)
    }
    if (page.id == "15") {
      this.nav.setRoot(InspectionsPage)
      // this.showkpi()
    }
    if (page.id == '11') {
      this.nav.setRoot(EventPage)
    }
    if (page.id == '1') {
      this.nav.setRoot(DashboardPage)
    }
    if (page.id == '12') {
      this.nav.setRoot(TaskPage)
    }
    if (page.id == '13') {
      this.nav.setRoot(CustomerPage)
    }
    if (page.id == '144') {
      this.nav.setRoot(SettingsPage)
    }
    if (page.id == '14') {
      this.nav.setRoot(MajorcomponentfilterPage)
    }
    if(page=='home'){
      this.nav.setRoot(HomePage) 

    }
    else {
  // this.nav.setRoot(HomePage)
    }
   
  }
}
