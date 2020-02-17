import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
listData: any=[];
 token: any;
 userType : any;
 public pagingEnabled: boolean = true;
 currentCount: any;
 newposts : any;
 newposts1 : any;
  constructor(public rest:RestProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.token = JSON.parse(localStorage.getItem('menu'))
    this.userType=localStorage.getItem('Usertype')

    this.submitApicall();
  }
  submitApicall(){
    var formData=new FormData();
    formData.append('token',this.token)
    formData.append('page','1')
    this.rest.getSESubmittedChecklists(formData).then(data=>{
      this.listData=data['data'].submitted_checklist.data;
    console.log( this.listData)
   })
  }
  details(item){
    if(this.userType==='Maintenance Manager'){
      var formData=new FormData();
      formData.append('token',this.token)
      formData.append('measurement_master_id',item.master_id)
      formData.append('model_id',item.model_id)
      formData.append('site_id',item.site_id)
      formData.append('equipment_id',item.equipment_id)
      formData.append('checklist_id',item.checklist_id)
     
      this.rest.editAnswerAgainstQuestionSubmitMM(formData).then(data=>{
        console.log(data)
        this.navCtrl.push(QuestionPage,{"apivalue":data['data'].edit_answer})
       console.log(data['data'].edit_answer)
      })
    }else{
      var formData=new FormData();
      formData.append('token',this.token)
      formData.append('measurement_master_id',item.master_id)
      formData.append('model_id',item.model_id)
      formData.append('site_id',item.site_id)
      formData.append('equipment_id',item.equipment_id)
      formData.append('checklist_id',item.checklist_id)
     
      this.rest.editAnswerAgainstQuestionSave(formData).then(data=>{
        console.log(data)
        this.navCtrl.push(QuestionPage,{"apivalue":data['data'].edit_answer})
       console.log(data['data'].edit_answer)
      })
   
    }
    


    
  }


  doInfinite(infiniteScroll: any) {
       this.currentCount = this.currentCount + 1;
      this.token = JSON.parse(localStorage.getItem('menu'))
      this.userType=localStorage.getItem('Usertype')
  
     var formData=new FormData();
      formData.append('token',this.token)
      formData.append('page',this.currentCount)
      this.rest.getSESubmittedChecklists(formData).then(data=>{
        this.newposts1 = data['data'].submitted_checklist.data;
         this.newposts = this.newposts1;  
                if (this.newposts.length) {
               for (let i in this.newposts) {
                   this.listData.push(this.newposts[i]);
               }
           } else {
               this.pagingEnabled = false;
           }
 
           infiniteScroll.complete();
      console.log( this.listData)
     })
   }
   delete(item){

    var formData=new FormData();
    formData.append('token',this.token)
    formData.append('measurement_master_id',item.master_id)
     this.rest.deleteSESubmittedChecklists(formData).then(data=>{
       console.log(data)

       this.submitApicall();
       alert("Delete Successfully.")

     })
     console.log(item)
   }
}
