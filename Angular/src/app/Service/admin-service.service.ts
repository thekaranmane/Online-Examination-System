import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from '../Model/AdminModel/AdminLogin';
import { AddExam } from '../Model/AdminModel/AddExam';
import { AddQuestion } from '../Model/AdminModel/AddQuestion';




@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  Url = "http://localhost:8080";


  constructor(
    private http: HttpClient
  ) { }


  // admin login
  public doLogin(admin: AdminLogin){
    return this.http.post(this.Url+"/admin/login",admin);
  }


  // admin add Exam
  public addExam(exam: AddExam){
    return this.http.post(this.Url+"/add/exam",exam);
  }

  //admin get all user
  public getUser(){
    return this.http.get(this.Url+"/registration/userall");
  }

  // admin get all exam
  public getExam(){
    return this.http.get(this.Url+"/add/get");
  }

  // admin update exam
  public updateExam(exam: AddExam){
    return this.http.post(this.Url+"/add/update",exam);
  }

  // admin delete exam
  public deleteExam(examid: AddExam){
    return this.http.post(this.Url+"/add/delete",examid);
  }

  // admin add question
  addQuestion(question: AddQuestion){
    return this.http.post(this.Url+"/question/add",question);
  }

  // admin get all question
  getQuestion(){
    return this.http.get(this.Url+"/question/getallQuestion");
  }



}
