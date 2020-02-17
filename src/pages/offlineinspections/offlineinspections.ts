import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the OfflineinspectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offlineinspections',
  templateUrl: 'offlineinspections.html',
})
export class OfflineinspectionsPage {
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
  userType: any;
  getLocalData: any;
  arrOfflineInsperctionCreate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.apivalue = this.navParams.get("apivalue");
    console.log(this.apivalue)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfflineinspectionsPage');
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
    this.token = JSON.parse(localStorage.getItem('menu'))
    let date = new Date().toDateString();
    this.apivalue[0].date = date;
    this.apivalue[0].user_id = this.token;
    console.log(this.apivalue)
    let noteMsg = '';
    let fieldMsg = '';
    for (let x = 0; x < this.apivalue[0].classification.length; x++) {
      for (let y = 0; y < this.apivalue[0].classification[x].question.length; y++) {
        console.log(this.apivalue[0].classification[x].question[y].cross_click)
        if (this.apivalue[0].classification[x].question[y].cross_click == "true"
          && this.apivalue[0].classification[x].question[y].note == '') {
          noteMsg = "NOTE is mandatory at " + this.apivalue[0].classification[x].classification_name;
          //  alert("NOTE is mandatory at ")
        }
        if (this.apivalue[0].classification[x].question[y].answer == "") {
          fieldMsg = "All field are required for "+ this.apivalue[0].classification[x].classification_name;
        }

      }
    }
    if (noteMsg == "" && fieldMsg == "") {
      alert("Successfully Submited");

      if (localStorage.getItem('offlineqstionans')) {
        this.getLocalData = JSON.parse(localStorage.getItem('offlineqstionans'));

        let a = this.apivalue.concat(this.getLocalData)
        localStorage.setItem('offlineqstionans', JSON.stringify(a))
        this.navCtrl.setRoot(HomePage);
        alert("Offline Inspection Create")
      } else {
        alert("Offline Inspection Create")
        var arrtemp = [];
        arrtemp.push(this.apivalue)

        localStorage.setItem("offlineqstionans", JSON.stringify(this.apivalue))

        this.navCtrl.setRoot(HomePage)
      }

    }
    else if (noteMsg != "" && fieldMsg == "") {
      alert(noteMsg)
    }
    else if (noteMsg == "" && fieldMsg != "") {
      alert(fieldMsg)
    }
    else {
      alert(noteMsg)
      alert(fieldMsg)
    }

  }
}
