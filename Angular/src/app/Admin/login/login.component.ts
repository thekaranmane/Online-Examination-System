import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/Model/AdminModel/AdminLogin';
import { UserLogin } from 'src/app/Model/UserModel/userLogin';
import { AdminServiceService } from 'src/app/Service/admin-service.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentAdmin {
  
  username:String="";
  password:String="";
  adminLogin:any;



constructor(
  private AdminService:AdminServiceService,
  private router:Router,
 ) { }
  

onSubmit()
{


  this.adminLogin = new AdminLogin(this.username, this.password);
  console.log(this.adminLogin);

  this.AdminService.doLogin(this.adminLogin).subscribe(
    (data)=>{
      console.log(data);
      // success'
      if(data == 'success'){
        alert("Login Successfull");
        sessionStorage.setItem('isAdminLoggedIn','true');
        this.router.navigate(['admin/viewuser']);
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
