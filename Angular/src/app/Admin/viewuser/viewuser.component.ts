import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Service/admin-service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

  UserList:any=[];

  constructor(
    private router:Router,
    private AdminService:AdminServiceService
  ) {
    this.getAllUser();
  }

  getAllUser(){
    this.AdminService.getUser().subscribe(
      (data)=>{
        console.log(data);
        this.UserList = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
