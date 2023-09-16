package com.demo.Api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Repository.Addexam;
import com.demo.Repository.Addquestion;
import com.demo.model.addexam;
import com.demo.model.addquestion;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/question")
public class addquestionapi 
{
	@Autowired
	private Addquestion question;
	@Autowired
	private Addexam exam;
	
		@PostMapping("/add")
		private String add (@RequestBody addquestion add ) 
		{
			addquestion tempAddquestion= new addquestion();
			tempAddquestion.setId(0);
			tempAddquestion.setQuestion(add.getQuestion());
			tempAddquestion.setOption1(add.getOption1());
			tempAddquestion.setOption2(add.getOption2());
			tempAddquestion.setOption3(add.getOption3());
			tempAddquestion.setOption4(add.getOption4());
			tempAddquestion.setCorrectanswer(add.getCorrectanswer());
			// tempAddquestion.setExamTable(add.getExamTable());
			tempAddquestion.setExamTable(exam.findById(add.getExamTable().getExam_id()).get());
			

			addexam exam = new addexam();
			exam.setExam_id(add.getExamTable().getExam_id());
			exam.setExamname(add.getExamTable().getExamname());
			exam.setExamdate(add.getExamTable().getExamdate());

			question.save(tempAddquestion);

			
			return "success";
		}

		//get
		@GetMapping("/getallQuestion")
		private List<addquestion> getallQuestion() 
		{
			List<addquestion> alList = question.findAll();

			

			for (addquestion addquestion : alList) 
			{
				addquestion.setExamTable(null);
			}
			//examTable
				
				return alList;
		}
		
		//get
		// public getQuestion(examid:any){
		// 	return this.http.get(this.Url+"/question/getQuestion/"+examid);
		//   }
		@GetMapping("/getQuestion/{examid}")
		private List<addquestion> getQuestion(@PathVariable("examid") long examid)
		{

			System.out.println("examid"+examid);

			

			List<addquestion> alList = question.findAll();
			

		



			List<addquestion> alList2 = new ArrayList<addquestion>();

			for (addquestion addquestion : alList) 
			{
				if(addquestion.getExamTable().getExam_id()==examid)
				{
					alList2.add(addquestion);
				}
			}

			for (addquestion addquestion : alList2) 
			{
				addquestion.setExamTable(null);
			}

			//examTable
				
				return alList2;
		}
	
}
