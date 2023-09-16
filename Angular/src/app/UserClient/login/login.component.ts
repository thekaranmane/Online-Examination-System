import { Component } from '@angular/core';
import { UserLogin } from './../../Model/UserModel/userLogin'
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any="";
  password:String="";
userLogin:any;




constructor(
  private UserServiceService:UserServiceService,
  private router:Router
 ) { }
  

onSubmit()
{


  this.userLogin = new UserLogin(this.email, this.password);
  console.log(this.userLogin);

  this.UserServiceService.doLogin(this.userLogin).subscribe(
    (data)=>{
      if(data == 'success'){
        alert("Login Successfull");
        this.router.navigate(['user/userlogin']);
        sessionStorage.setItem('user',this.email);
        sessionStorage.setItem('isUserLoggedIn','true');
      }
      else{
        alert("Login Failed");
      }
    },
    (error)=>{
      console.log(error);
    }
  );


}



}

