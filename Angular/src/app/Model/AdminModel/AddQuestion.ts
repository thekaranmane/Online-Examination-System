import { AddExam } from "./AddExam";

export class AddQuestion
{
    selectexam:String="";
    question:String="";
    option1:String="";
    option2:String="";
    option3:String="";
    option4:String="";
    correctanswer:String="";
    examTable:AddExam= new AddExam("","",0);
    constructor(selectexam:String,questionname:String,option1:String,option2:String,option3:String, option4:String,correctanswer:String, exTable:AddExam)
    {
        this.selectexam=selectexam;
        this.question=questionname;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.correctanswer=correctanswer;
        this.examTable=exTable;


    }

}