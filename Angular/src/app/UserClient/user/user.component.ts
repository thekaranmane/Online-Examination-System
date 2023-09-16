import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  ExamList:any=[];

  constructor(private userService:UserServiceService, private router:Router) { 
    this.getAllExam();
  }


onStartExam(examid:any){
  console.log(examid);
  localStorage.setItem('exam_id',examid);
  this.router.navigate(['/user/startexam']);
}

  



  getAllExam(){
    this.userService.getExam().subscribe(
      (data)=>{
        console.log(data);
        this.ExamList = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
