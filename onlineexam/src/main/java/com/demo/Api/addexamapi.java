package com.demo.Api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Repository.Addexam;
import com.demo.model.addexam;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/add")
public class addexamapi 
{
		@Autowired
    	private Addexam exam;
		
		@PostMapping("/exam")
		private List<String> add(@RequestBody addexam add ) {
			
			addexam tempAddexam= new addexam();
			tempAddexam.setExam_id(0l);
			tempAddexam.setExamname(add.getExamname());
			tempAddexam.setExamdate(add.getExamdate());
			
			
			exam.save(tempAddexam);
		

			List<String> alList = new ArrayList<>();
			alList.add("success");

			return alList;
		}
		
		
		@GetMapping("/get")
		private List<addexam> get( ) {
		List<addexam> alList = exam.findAll();

		for (addexam addexam : alList) {
			addexam.setQuestionTable(null);
		}
			
			return alList;
		}

		// Update
		@PostMapping("/update")
		private List<String> update(@RequestBody addexam add ) {
			
			addexam tempAddexam= new addexam();
			tempAddexam.setExam_id((long) add.getExam_id());
			tempAddexam.setExamname(add.getExamname());
			tempAddexam.setExamdate(add.getExamdate());
			
			
			exam.save(tempAddexam);
		

			List<String> alList = new ArrayList<>();
			alList.add("success");

			return alList;
		}

		// Delete
		@PostMapping("/delete")
		private List<String> delete(@RequestBody addexam add ) {

			// 
			System.out.println("delete");
			System.out.println(add.getExam_id());
			
			addexam tempAddexam= new addexam();
			tempAddexam.setExam_id(add.getExam_id());
			tempAddexam.setExamname(add.getExamname());
			tempAddexam.setExamdate(add.getExamdate());
			
			
			exam.delete(tempAddexam);
		

			List<String> alList = new ArrayList<>();
			alList.add("success");

			return alList;
		}
    	
    	
}
