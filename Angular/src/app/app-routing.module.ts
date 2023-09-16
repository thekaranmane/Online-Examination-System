import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UserClient/home/home.component';
import { LoginComponent } from './UserClient/login/login.component';
import { RegistrationComponent } from './UserClient/registration/registration.component';
import { UserComponent } from './UserClient/user/user.component';
import { StartexamComponent } from './UserClient/startexam/startexam.component';
import { AddexamComponent } from './Admin/addexam/addexam.component';
import { ExamlistComponent } from './Admin/examlist/examlist.component';
import { AddquestionComponent } from './Admin/addquestion/addquestion.component';
import { ViewresultComponent } from './Admin/viewresult/viewresult.component';
import { ViewuserComponent } from './Admin/viewuser/viewuser.component';
import { NavbarComponent } from './UserClient/navbar/navbar.component';
import { NavabarComponent } from './Admin/navabar/navabar.component';
import { LoginComponentAdmin } from './Admin/login/login.component';

const routes: Routes = [
  {path:"", component:HomeComponent,  },
  // {path:"admin", redirectTo:"admin/login", pathMatch:"full"},
  {path:"admin",component:LoginComponentAdmin},
  {path:"user", redirectTo:"user/login", pathMatch:"full"},
  
  
  {path:"user", component:NavbarComponent, children:[
    {path:"login", component:LoginComponent},
    {path:"singUp", component:RegistrationComponent},
    {path:"userlogin",component:UserComponent},
    {path:"startexam",component:StartexamComponent},
  ]},

  {path:"admin", component:NavabarComponent, children:[

    {path:"login", component:LoginComponentAdmin},
    {path:"addexam",component:AddexamComponent},
    {path:"examlist",component:ExamlistComponent},
    {path:"addquestion",component:AddquestionComponent},
    {path:"viewresult",component:ViewresultComponent},
    {path:"viewuser",component:ViewuserComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
