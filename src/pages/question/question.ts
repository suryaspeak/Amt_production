import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  ddget: any;
  apivalue: any = [];
  apivaluenew: any = [];
  token: any;
  currentSelected: any;
  new: any;
  Header: any;
  shownGroup = null;
  shownGroupnew = null;
  selectedRow: any;
  selectedAll: boolean = false;
  Eqp: any;
  buttonDisabled: boolean = false;
  apivaluecopy: any = [];
  Checklist: any;
  totalarryFilter: any = [];
  userType : any;
  constructor(public loadingCtrl: LoadingController, public renderer: Renderer, public rest: RestProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.userType=localStorage.getItem('Usertype')
    this.selectedRow = [];
    this.ddget = this.navParams.get("dd");
    this.Eqp = this.navParams.get('Eqp')
    console.log(this.navParams.get("apivalue"))

    if (this.navParams.get('button')) {
      this.apivalue = this.navParams.get("apivalue");

    }
    else {

      if (localStorage.getItem('locdata')) {
       
          this.apivalue = JSON.parse(localStorage.getItem('locdata'));
          this.apivaluecopy = this.apivalue;
          console.log(this.apivalue)
  
  
          for (let i = 0; i < this.apivaluecopy.length; i++) {
            if (this.apivaluecopy[i].equipment == this.Eqp && this.apivaluecopy[i].checkListName == this.navParams.get('checklist')) {
              console.log("Match")
              console.log(this.apivaluecopy[i]);
              this.apivalue = [];
              this.apivalue.push(this.apivaluecopy[i]);
              console.log(this.apivalue)
            }
            else {
              console.log("NotMatch")
              this.apivalue = []
              this.apivalue = this.navParams.get("apivalue");
              // this.apivalue = this.navParams.get("apivalue");
            }
          }
     

       


      }
      else {
        this.apivalue = [];
        this.apivalue = this.navParams.get("apivalue");
      }
    }
    // this.Header = this.apivalue[0].checkListName;
    console.log(this.apivalue)
  }
  toggleGroup(group) {
    console.log(group)
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  toggleGroupnew(group) {

    if (this.isGroupShownnew(group)) {
      this.shownGroupnew = null;
    } else {
      this.shownGroupnew = group;
    }
  }
  selectCompany(k, i, j) {

    if (this.apivalue[k].classification[i].question[j].selected) {
      this.apivalue[k].classification[i].question[j].selectedred = null;

      this.apivalue[k].classification[i].question[j].selected = null;
    } else {
      this.apivalue[k].classification[i].question[j].selected = "Selectedred";

    }

  }
  toggleGroupnewplus(group, item, ix, k, value) {
    if (value == 0) {

      if (this.isGroupShownnew(group)) {
        this.shownGroupnew = null;
      } else {
        this.shownGroupnew = group;
      }

    } else {
      this.apivalue[k].classification[ix].question[group].answer = "Yes"
      this.apivalue[k].classification[ix].question[group].cross_click = "false";
      this.apivalue[k].classification[ix].question[group].selected = "selected";
      this.apivalue[k].classification[ix].question[group].selectedred = null;
    }
    console.log(value)


  }
  toggleGroupnewcross(group, item, ix, k, value) {
    if (value == 0) {
      this.apivalue[k].classification[ix].question[group].cross_click = "true";
      this.apivalue[k].classification[ix].question[group].answer = "No"
      this.apivalue[k].classification[ix].question[group].selected = null;
      this.apivalue[k].classification[ix].question[group].selectedred = "selectedred";
      if (this.isGroupShownnew(group)) {
        this.shownGroupnew = null;
      } else {
        this.shownGroupnew = group;
      }

    } else {
      this.apivalue[k].classification[ix].question[group].answer = "Yes"
      this.apivalue[k].classification[ix].question[group].cross_click = "false";
      this.apivalue[k].classification[ix].question[group].selected = "selected";
      this.apivalue[k].classification[ix].question[group].selectedred = null;
    }
    console.log(value)


  }
  isGroupShownnew(group) {
    // console.log(group)
    return this.shownGroupnew === group;
  }


  sumMit() {



    this.apivalue[0].is_submit = "1";

    const loader = this.loadingCtrl.create({
      content: "Please wait...",

    });
    loader.present();
    this.token = JSON.parse(localStorage.getItem('menu'))
    let date = new Date().toDateString();
    this.apivalue[0].date = date;
    this.apivalue[0].user_id = this.token;

    console.log(this.apivalue)
    var formData = new FormData();
    formData.append('token', this.token);
    formData.append('measurement_answer', JSON.stringify(this.apivalue));
    this.rest.answer(formData).then(data => {
      loader.dismiss();
      alert(data['data'].error)
      if (data['data'].error=="Sucessfull") {
      
        this.navCtrl.setRoot(HomePage)
      }
      else {

      }

      console.log(data)
    }).catch(err => {
        console.log(err)
      // alert(JSON.stringify(err.error))
    })


  }

  save() {

    if(this.userType==='Maintenance Manager'){
      this.token = JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('measurement_answer', JSON.stringify(this.apivalue));
      this.rest.answer(formData).then(data=>{
        this.navCtrl.setRoot(HomePage)
        alert("data Save Successfully")
      })
    }else{
      this.token = JSON.parse(localStorage.getItem('menu'))
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('measurement_answer', JSON.stringify(this.apivalue));
      this.rest.answersave(formData).then(data=>{
        this.navCtrl.setRoot(HomePage)
        alert("data Save Successfully")
      })
    }

   

    }  


   
    cancel(){
      this.navCtrl.pop();
    }

   

  }

