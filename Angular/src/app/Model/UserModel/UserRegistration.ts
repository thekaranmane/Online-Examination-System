export class UserRegistration
{
   firstname:String="";
   lastname:String="";
   email:String="";
   password:String="";
   confirmpassword:String="";
   mobilenumber:String="";
   dob:String="";
   gender:String="";
 
constructor(firstname:String, lastname:String,email:String, 
    password:String,confirmpassword:String, mobilenumber:String, dob:String, gender:String)
{
    this.firstname= firstname;
    this.lastname=lastname;
    this.email = email;
    this.password =password;
    this.confirmpassword = confirmpassword;
    this.mobilenumber =mobilenumber;
    this.dob = dob;
    this.gender=gender;

}
}