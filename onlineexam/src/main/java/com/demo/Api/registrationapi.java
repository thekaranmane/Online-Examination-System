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

import com.demo.Repository.Registration;
import com.demo.model.registration;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/registration")
public class registrationapi
{
	@Autowired
	private Registration registration1;
	
	@GetMapping("/userall")
	public List<registration> userall(){
		
		List<com.demo.model.registration> reglList = registration1.findAll();
		
		return reglList;
		
	}
	
	@PostMapping("/userRegistration")
	public List<String> add(@RequestBody registration reg){
		registration1.save(reg);
		List<String> alList = new ArrayList<>();
		alList.add("success");
		return alList;
	}

	@PostMapping("/userLogin")
	public List<String> login(@RequestBody userLogin login){
		List<registration> reglList = registration1.findAll();
		List<String> alList = new ArrayList<>();
		for(registration reg1:reglList) {
			if(reg1.getEmail().equals(login.getEmail()) && reg1.getPassword().equals(login.getPassword())) {
				alList.add("success");
				// alList.add(reg1.getFirstname());
				// alList.add(reg1.getLastname());
				return alList;
			}
		}
		alList.add("fail");
		return alList;
	}

	
	
	

}

class userLogin{
	private String email;
	private String password;
	
	public userLogin() {
		super();
	}
	public userLogin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public String getPassword() {
		return password;
	}
}

