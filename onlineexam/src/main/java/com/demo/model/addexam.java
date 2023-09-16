package com.demo.model;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;



@Entity
public class addexam 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long exam_id;
	private String examname;
	private String examdate;
	
	@OneToMany(mappedBy = "examTable", cascade = CascadeType.ALL, orphanRemoval = true)
	List<addquestion> questionTable = new ArrayList<addquestion>();

	public addexam() {
		super();
	}

	public addexam(long exam_id, String examname, String examdate) {
		super();
		this.exam_id = exam_id;
		this.examname = examname;
		this.examdate = examdate;
	}
	public addexam(long exam_id, String examname, String examdate, List<addquestion> questionTable) {
		super();
		this.exam_id = exam_id;
		this.examname = examname;
		this.examdate = examdate;
		this.questionTable = questionTable;
	}

	public long getExam_id() {
		return exam_id;
	}

	public void setExam_id(long exam_id) {
		this.exam_id = exam_id;
	}

	public String getExamname() {
		return examname;
	}

	public void setExamname(String examname) {
		this.examname = examname;
	}

	public String getExamdate() {
		return examdate;
	}

	public void setExamdate(String examdate) {
		this.examdate = examdate;
	}

	public List<addquestion> getQuestionTable() {
		return questionTable;
	}

	public void setQuestionTable(List<addquestion> questionTable) {
		this.questionTable = questionTable;
	}
	
	
	
}
