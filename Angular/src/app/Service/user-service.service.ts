import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from '../Model/UserModel/UserRegistration';
import { UserLogin } from '../Model/UserModel/userLogin';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  Url = "http://localhost:8080";


  constructor(
    private http: HttpClient
  ) { }


  // User Registration
  public doRegistration(user:UserRegistration){
    return this.http.post(this.Url+"/registration/userRegistration",user);
  }

  // User Login
  public doLogin(user:UserLogin){
    return this.http.post(this.Url+"/registration/userLogin",user);
  }

  // User get all exam
  public getExam(){
    return this.http.get(this.Url+"/add/get");
  }

  // User get Question
  public getQuestion(examid:any){
    return this.http.get(this.Url+"/question/getQuestion/"+examid);
  }
}
