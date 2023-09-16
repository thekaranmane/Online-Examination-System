import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './UserClient/navbar/navbar.component';
import { HomeComponent } from './UserClient/home/home.component';
import { FooterComponent } from './UserClient/footer/footer.component';
import { LoginComponent } from './UserClient/login/login.component';
import { RegistrationComponent } from './UserClient/registration/registration.component';
import { UserComponent } from './UserClient/user/user.component';
import { StartexamComponent } from './UserClient/startexam/startexam.component';
import { NavabarComponent } from './Admin/navabar/navabar.component';
import { AddexamComponent } from './Admin/addexam/addexam.component';
import { ExamlistComponent } from './Admin/examlist/examlist.component';
import { AddquestionComponent } from './Admin/addquestion/addquestion.component';
import { ViewresultComponent } from './Admin/viewresult/viewresult.component';
import { ViewuserComponent } from './Admin/viewuser/viewuser.component';
import { LoginComponentAdmin } from './Admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    StartexamComponent,
    NavabarComponent,
    AddexamComponent,
    ExamlistComponent,
    AddquestionComponent,
    ViewresultComponent,
    ViewuserComponent,
    LoginComponentAdmin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
