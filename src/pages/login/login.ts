import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { Network } from '@ionic-native/network';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


const DB_NAME = '__salesmanStorage.db';
const win: any = window;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private _db: any;
  email: any;
  password: any;
  token: any;
  dataaccessmenu: any;
  componentCode: any = [];
  siteData: any;
  dohh: any;
  constructor(private sqlite: SQLite, public platform: Platform, public toast: ToastController, public network: Network, public toastController: ToastController, public loadingCtrl: LoadingController, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public alertCtrl: AlertController) {
    this.menu.swipeEnable(false);
    var todayDate = new Date().toISOString().slice(0, 10);


    // watch network for a disconnection

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();


    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

    // stop connect watch
    connectSubscription.unsubscribe();

  }


  ionViewDidLoad() {
    this.email = localStorage.getItem('useremail')
    console.log('ionViewDidLoad LoginPage');
  }
  openDashboardPage() {
    this.navCtrl.setRoot(HomePage);

  }

  login() {

    if(this.network.type!="none")
    
    
    {
      let loading = this.loadingCtrl.create({
        content: 'Please wait it may take few to several mins...'
      });
  
      loading.present();
  
      var formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
    
  
      this.rest.logindata(formData).then(ddat => {

           console.log(ddat)
        if (ddat['status'] == "active" && ddat['data'].user.log_type=='marc_user') {
          this.token = ddat['data'].token;
          var formData = new FormData();
          formData.append('token', this.token);
        this.dohh=new Date();
       
          formData.append('activity_datetime',new Date().toISOString())
          this.rest.userlog(formData).then(dd=>{
            console.log(dd)
          })
  
             localStorage.setItem("menu",this.token) 
             localStorage.setItem("emprole",ddat['data'].user.employee_role)
             localStorage.setItem("Usertype",ddat['data'].user.employee_role)
          var formData = new FormData();
          formData.append('token', this.token);
         
          this.rest.useraccess(formData).then(data => {

                
                  var formData = new FormData();
                  formData.append('token', this.token);
                  this.rest.componentCode(formData).then(data => {
  
  
                    this.componentCode = data['data'].component;
                  })
                  this.rest.siteGet(formData).then(data => {
                    this.siteData = data['data'].site;
                   
                     localStorage.setItem("siteMaster",JSON.stringify(this.siteData))
              
                    console.log(data)
                  })
             
          
               
                   this.dataaccessmenu = data['menu']
                   console.log(this.dataaccessmenu)
                   localStorage.setItem("menu", JSON.stringify(this.token))
                   loading.dismiss();
                   localStorage.setItem("home", JSON.stringify(this.dataaccessmenu));
              this.navCtrl.setRoot(HomePage)
            }).catch(err => {
              alert("Service is down. Please try again later");
              loading.dismiss();
              console.log(err)
            })
  
        }
        else {
          const toast = this.toastController.create({
            message: 'Invalid Username or password..',
            duration: 2000
          });
          toast.present();
          loading.dismiss();
        }
  
      })
  
    }else{

      localStorage.setItem("useremail", this.email);
      localStorage.setItem("userpass", this.password);
      if(this.email==localStorage.getItem('useremail') && localStorage.getItem('userpass')==this.password){
        this.navCtrl.setRoot(HomePage)
      }
      else{
        const toast = this.toastController.create({
          message: 'Invalid Username or password..',
          duration: 2000
        });
        toast.present();
      }
    }


  }
  
}
