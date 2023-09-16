import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/Model/UserModel/UserRegistration';
import { UserServiceService } from 'src/app/Service/user-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent 
{
   firstname:String="";
   lastname:String="";
   email:String="";
   password:String="";
   confirmpassword:String="";
   mobilenumber:String="";
   dob:String="";
   gender:string="";


   constructor(
    private UserServiceService:UserServiceService,
    private router:Router
   ) { }




   
   UserRegistration:any;
  onSubmit(){

    if(this.password != this.confirmpassword){
      alert("Password and Confirm Password not matched");
      return;
    }

    this.UserRegistration = new UserRegistration(
      this.firstname,
      this.lastname,
      this.email,
      this.password,
      this.confirmpassword,
      this.mobilenumber,
      this.dob,
      this.gender
    );

    this.UserServiceService.doRegistration(this.UserRegistration).subscribe(
      (data)=>{
        if(data == 'success'){
          alert("Registration Successfull");
          this.router.navigate(['user/login']);
        }
        else{
          alert("Registration Failed");
        }
      }
    );
  }
}
