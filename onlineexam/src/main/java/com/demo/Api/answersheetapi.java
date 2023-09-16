package com.demo.Api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Repository.Answersheet;
import com.demo.model.answersheet;

@RestController
@RequestMapping("/answer")
public class answersheetapi {
	
	@Autowired
	private Answersheet answer;
	
	@PostMapping("/sheet")
	private String add (@RequestBody answersheet add)
	{
		answer.save(add);
		return "Answersheet Viewed";
	}

}
