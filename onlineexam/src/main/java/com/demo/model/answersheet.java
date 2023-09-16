package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class answersheet
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int UserID;
	private int ExamId;
	private int QuestionId;
	private String UserAnswer;
	public answersheet() {
		super();
		
	}
	public answersheet(int id, int userID, int examId, int questionId, String userAnswer) {
		super();
		this.id = id;
		UserID = userID;
		ExamId = examId;
		QuestionId = questionId;
		UserAnswer = userAnswer;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserID() {
		return UserID;
	}
	public void setUserID(int userID) {
		UserID = userID;
	}
	public int getExamId() {
		return ExamId;
	}
	public void setExamId(int examId) {
		ExamId = examId;
	}
	public int getQuestionId() {
		return QuestionId;
	}
	public void setQuestionId(int questionId) {
		QuestionId = questionId;
	}
	public String getUserAnswer() {
		return UserAnswer;
	}
	public void setUserAnswer(String userAnswer) {
		UserAnswer = userAnswer;
	}
	
}
