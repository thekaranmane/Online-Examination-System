export class AdminLogin{
    id:number=0;
    username:String="";
    password:String="";
    constructor(user:String, password:String){
        this.username=user;
        this.password=password;
    }
}