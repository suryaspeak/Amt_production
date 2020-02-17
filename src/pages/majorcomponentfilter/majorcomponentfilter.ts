import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MajorcomponentPage } from '../majorcomponent/majorcomponent';
import { RestProvider } from '../../providers/rest/rest';
import { Network } from '@ionic-native/network';


@IonicPage()
@Component({
  selector: 'page-majorcomponentfilter',
  templateUrl: 'majorcomponentfilter.html',
})
export class MajorcomponentfilterPage {
  siteData : any;
  token: any;
  siteId : any;
  equipment : any;
  componentCodes: any;
  Componentcode: any;
  Usertype : any;
  EquipmentId : any=[];
  Eqarr : any=[]
  ConponentStatus: any=[];
  Status : any;
  SearchValueCompontent : any;
  booleamcom : any;
  ComponentArr : any;
  constructor(public loadingCtrl : LoadingController,public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    this.Usertype=localStorage.getItem('Usertype')
    console.log(this.Usertype)
    this.token = JSON.parse(localStorage.getItem('menu'))
    var formData = new FormData();
    formData.append('token', this.token);
 
    this.rest.siteGet(formData).then(data => {
      this.siteData = data['data'].site;
    })
    console.log('ionViewDidLoad MajorcomponentfilterPage');
  }
  sumMit(){
    if(this.SearchValueCompontent){
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      console.log(this.siteId,this.EquipmentId,this.ConponentStatus);
  
      // for(let i=0;i<this.EquipmentId.length;i++){
      //   this.Eqarr.push(this.EquipmentId[i].EqpPlanId)
      // }
  
      var formData = new FormData();
      formData.append('token', this.token);
      formData.append('site_id', this.siteId);
      formData.append('eqp_plan_id', JSON.stringify(this.EquipmentId));
      formData.append('comp_code_id', JSON.stringify(this.Componentcode));
      if(this.Status){
        formData.append('approval_status',this.Status)
      }
      
   
     
        this.rest.listLCCWorkflow(formData).then(data=>{
  
          this.navCtrl.push(MajorcomponentPage,{"List":data['data'].lcc_workflow_list})
           console.log(data)
           loader.dismiss();
        })
    }else{
      alert("no keyword found")

    }
 

    // 
  }
  onSiteChange(item) {
   

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      this.siteId = item;
      var formData = new FormData();
      formData.append('id', item);
      formData.append('token', this.token);
      this.rest.equipmentBySite(formData).then(data => {
        this.equipment = data['data'].equipment
        console.log(data)
        loader.dismiss();
      })
    }
    getComponent(item) {
      console.log(item)
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
  
      });
      loader.present();
      console.log(item)
      if(this.SearchValueCompontent){
        if (this.SearchValueCompontent.length >= 3) {
          var formData = new FormData();
          formData.append('token', this.token);
          formData.append('componentDesc', this.SearchValueCompontent);
          this.rest.ComponentCodesAll(formData).then(data => {
           
            this.ComponentArr = data['data'].component;
            console.log(this.ComponentArr.length)
            if(this.ComponentArr.length>0){
                 this.booleamcom=true;
            }else{
              this.booleamcom=false;
            }
            console.log(this.booleamcom)
          }).then(() => {
            loader.dismiss();
          })
        }
        else {
          alert("must have atleast 3 keyword")
          loader.dismiss();
        }
      }
      else{
        loader.dismiss();
        alert("no keyword found")
      }
    
    }
    comselect(item){
      this.Componentcode=item
      console.log(item)
  
    }
}
