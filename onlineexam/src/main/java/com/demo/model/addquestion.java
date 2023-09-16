package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class addquestion 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	// private String examid;
	private String question;
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String correctanswer;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="exam_id")
	addexam examTable;
	public addquestion() {
		super();
		// TODO Auto-generated constructor stub
	}
	public addquestion(long id, String question, String option1, String option2, String option3,
			String option4, String correctanswer, addexam examTable) {
		super();
		this.id = id;
		// this.examid = examid;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correctanswer = correctanswer;
		this.examTable = examTable;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	// public String getExamid() {
	// 	return examid;
	// }
	// public void setExamid(String examid) {
	// 	this.examid = examid;
	// }
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getOption1() {
		return option1;
	}
	public void setOption1(String option1) {
		this.option1 = option1;
	}
	public String getOption2() {
		return option2;
	}
	public void setOption2(String option2) {
		this.option2 = option2;
	}
	public String getOption3() {
		return option3;
	}
	public void setOption3(String option3) {
		this.option3 = option3;
	}
	public String getOption4() {
		return option4;
	}
	public void setOption4(String option4) {
		this.option4 = option4;
	}
	public String getCorrectanswer() {
		return correctanswer;
	}
	public void setCorrectanswer(String correctanswer) {
		this.correctanswer = correctanswer;
	}
	public addexam getExamTable() {
		return examTable;
	}
	public void setExamTable(addexam examTable) {
		this.examTable = examTable;
	}
	
	


}
