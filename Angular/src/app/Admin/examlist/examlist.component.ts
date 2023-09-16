import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddExam } from 'src/app/Model/AdminModel/AddExam';
import { AdminServiceService } from 'src/app/Service/admin-service.service';

@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.css']
})
export class ExamlistComponent {

  ExamList:any=[];


  constructor(private router:Router, private adminservice:AdminServiceService){
    this.getAllExam();
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

  tempData:any=[];
  onEdit(examid:any){
    console.log(examid);

    let examNAME = prompt("Enter Exam Name");
    let examDATE = prompt("Enter Exam Date");
    // this.tempData = new AddExam(examNAME,examDATE,examid);
    this.tempData = new AddExam(String(examNAME), String(examDATE) ,examid);
    console.log(this.tempData);

    if(examNAME != null && examDATE != null){
      
    this.adminservice.updateExam(this.tempData).subscribe(
      (data)=>{
        console.log(data);
        this.getAllExam();
      },
      (error)=>{
        console.log(error);
      }
    );
    }
    
    
  }

  

  onDelete(examid:any){
    console.log(examid);

    this.tempData = new AddExam("", "", examid);

    this.adminservice.deleteExam(this.tempData).subscribe(
      (data)=>{
        console.log(data);
        if(data == 'success'){
          alert("Exam Deleted Successfully");
        }
        this.getAllExam();
     
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
