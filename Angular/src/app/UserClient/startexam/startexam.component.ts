import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-startexam',
  templateUrl: './startexam.component.html',
  styleUrls: ['./startexam.component.css']
})
export class StartexamComponent implements OnInit {
exam_id:any;
questionList:any=[];

isShowExam = true;
YourScore = 0;
totalQuestion = 0;

examForm:FormGroup = new FormGroup({
  answer: new FormControl('')
});


constructor(
  private router:Router,
  private userservice:UserServiceService,
) {

  if(localStorage.getItem('exam_id')){
    this.exam_id = localStorage.getItem('exam_id');
  }

  this.getQuestion();
  this.examForm = new FormGroup({});








}

ngOnInit(): void {
}

getQuestion(){
  this.userservice.getQuestion(this.exam_id).subscribe(
    (data)=>{
      console.log(data);
      this.questionList = data;
      this.totalQuestion = this.questionList.length;
      this.questionList.forEach((element:any) => {
        console.log(element);
        this.examForm.addControl(element.id, new FormControl(''));
      });
    },
    (error)=>{
      console.log(error);
    }
  );
}

AnswerSheet:any=[];
temp:any=[];
onSubmit(){

  console.log(this.examForm.value);
  



  for(const [key, value] of Object.entries(this.examForm.value)){

    this.AnswerSheet.push({id:key, answer:value});
  }



  this.temp = this.AnswerSheet.filter((element:any) => {
    return element.answer != "";
  });





  for(let i=0; i<this.temp.length; i++){
    for(let j=0; j<this.questionList.length; j++){
   
      if(this.temp[i].id == this.questionList[j].id){
        console.log(this.temp[i].answer);
        console.log(this.questionList[j].correctanswer);
        if(this.temp[i].answer == this.questionList[j].correctanswer){
          console.log(true)
          this.YourScore++;
        }
      }
    }
  }

this.isShowExam = false;

}


onStartExam(){
  this.isShowExam = true;
  this.getQuestion();
  this.examForm = new FormGroup({});
  this.AnswerSheet = [];
  this.temp = [];
  this.YourScore = 0;
  this.totalQuestion = 0;
}

onGoToExamList(){
  this.router.navigate(['user/userlogin']);
}

}
