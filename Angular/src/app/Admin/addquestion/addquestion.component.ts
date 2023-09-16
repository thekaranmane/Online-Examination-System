import { Component } from '@angular/core';
import { AddQuestion } from 'src/app/Model/AdminModel/AddQuestion';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Service/admin-service.service';
import { AddExam } from 'src/app/Model/AdminModel/AddExam';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent {

  ExamList:any=[];
  QuestionList:any=[];


  constructor(private router:Router, private adminservice:AdminServiceService){
    this.getAllExam();
    this.getAllQuestion();
  }


  getAllExam(){
    this.adminservice.getExam().subscribe(
      (data)=>{
        console.log(data);
        this.ExamList = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  // Q

  getAllQuestion(){
    this.adminservice.getQuestion().subscribe(
      (data)=>{
        console.log(data);
        this.QuestionList = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }




  selectexam:String="";
  questionname:String="";
  option1:String="";
  option2:String="";
  option3:String="";
  option4:String="";
  correctanswer:String="";

  AddQuestion:any;


tempExamTable:AddExam= new AddExam("","",0);
  onSubmit()
  {

    if(this.selectexam=="" || this.questionname=="" || this.option1=="" || this.option2=="" || this.option3=="" || this.option4=="" || this.correctanswer=="")
    {
      alert("Please Fill All Details");
      return
    }

    this.tempExamTable.exam_id=Number(this.selectexam);
    this.tempExamTable.examname= this.ExamList.find((x:any)=>x.exam_id==this.selectexam).examname;
    this.tempExamTable.examdate= this.ExamList.find((x:any)=>x.exam_id==this.selectexam).examdate;


    this.AddQuestion = new  AddQuestion(this.selectexam,this.questionname,this.option1,
      this.option2,this.option3,this.option4,this.correctanswer,this.tempExamTable)
      
 

      this.adminservice.addQuestion(this.AddQuestion).subscribe(
        (data)=>{
          console.log(data);
          alert("Question Added Successfully");
        },
        (error)=>{
          console.log(error);
        }
      );

 
    //  this.AddQuestion = new  AddQuestion(this.selectexam,this.questionname,this.option1,
    //   this.option2,this.option3,this.option4,this.correctanswer)
      
    //   console.log(this.AddQuestion);
  }

}
