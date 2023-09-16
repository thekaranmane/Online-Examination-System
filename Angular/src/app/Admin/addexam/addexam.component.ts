import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddExam } from 'src/app/Model/AdminModel/AddExam';
import { AdminServiceService } from 'src/app/Service/admin-service.service';

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.css']
})
export class AddexamComponent {
examname:String="";
examdate:String="";

AddExam:any;

constructor(
  private router:Router,
  private adminService:AdminServiceService
){}

onSubmit()
{
  this.AddExam = new AddExam(this.examname, this.examdate, 0);

  console.log(this.AddExam);

  this.adminService.addExam(this.AddExam).subscribe(
    (data)=>{
      console.log(data);
      // success'
      if(data == 'success'){
        alert("Exam Added Successfully");
        this.router.navigate(['admin/examlist']);
      }
      else{
        alert("Exam Adding Failed");
      }
    },
    (error)=>{
      console.log(error);
    }
  );
}

}
