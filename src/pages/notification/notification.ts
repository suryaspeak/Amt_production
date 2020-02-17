import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  token:any;
  listNotification: any;
  notification_id:any=[];
  noti:any=[];
  data:any;
  constructor(public alertCtrl:AlertController ,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token=JSON.parse(localStorage.getItem('menu'))
   
    var formData = new FormData();
    formData.append('token', this.token);
    this.rest.Notiflist(formData).then(data=>{
       this.data=data
      this.listNotification=data['data'].notification
      this.noti=this.data.data.notification
      console.log(this.noti.length)
      console.log(this.noti.length)
    for(let i = 0; i<this.noti.length ; i++){
  // alert("zs")
      console.log("dada")
        this.notification_id.push({"notification_id":this.noti[i].notification_id})
    }

    console.log(this.notification_id)
    var formDataa = new FormData();
    formDataa.append('token', this.token);
    formDataa.append('notification_id', JSON.stringify(this.notification_id));
    this.rest.notificationSeen(formDataa).then(data=>{


    })
    })
    
  }

  ionViewDidLoad() {
    

    console.log('ionViewDidLoad NotificationPage');
  }
  Notification(item) {
    console.log(item)
    const alert = this.alertCtrl.create({
      title: "Do you want to delete?",
      subTitle: item.name+"for equipment"+item.EqpPlan,
      

      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
                var formData = new FormData();
          formData.append('token', this.token);
          formData.append('notification_id', item.notification_id);

          this.rest.notificationdel(formData).then(data=>{


            var formData = new FormData();
            formData.append('token', this.token);
            this.rest.Notiflist(formData).then(data=>{
              this.listNotification=data['data'].notification
             
            })
            console.log(this.listNotification)
          })
          }
        }
      ]
    });
    alert.present();
  }

}
