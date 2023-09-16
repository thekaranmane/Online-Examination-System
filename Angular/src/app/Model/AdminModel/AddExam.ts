export class AddExam
{
    exam_id:Number=0;
    examname:String="";
    examdate:String="";

    constructor(examname:String, examdate:String, examid:Number)
    {
        this.exam_id=examid;
        this.examname=examname;
        this.examdate=examdate;
    }

}