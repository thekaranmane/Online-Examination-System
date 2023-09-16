export class UserAnswerSheet {
    public userAnswerSheetId: number;
    public userId: number;
    public examId: number;
    public questionId: number;
    public answer: string;
    public isCorrect: boolean;
    public isAttempted: boolean;

    constructor(
        userAnswerSheetId: number,
        userId: number,
        examId: number,
        questionId: number,
        answer: string,
        isCorrect: boolean,
        isAttempted: boolean
    ) {
        this.userAnswerSheetId = userAnswerSheetId;
        this.userId = userId;
        this.examId = examId;
        this.questionId = questionId;
        this.answer = answer;
        this.isCorrect = isCorrect;
        this.isAttempted = isAttempted;
    }
}