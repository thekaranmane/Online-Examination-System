package com.demo.Api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Repository.Adminlogin;
import com.demo.model.adminlogin;

import lombok.Getter;
import lombok.Setter;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class adminloginapi {
	
	@Autowired
	private Adminlogin adminlogin1;
	
	@PostMapping("/login")
	private List<String> login(@RequestBody adminlogin admin)
	{
		List<String> resp = new ArrayList<>();
		String usernameString = admin.getUsername();
		String passwoString = admin.getPassword();
		
		
		List<adminlogin> ad = adminlogin1.findAll();
		
		if(
				usernameString.equals(ad.get(0).getUsername()) && passwoString.equals(ad.get(0).getPassword())
				) {

			resp.add("success");
			return resp;
			
		}

	
		resp.add("fail");
		return resp;
	}
}

@Getter
@Setter
class Adminlogin1{
	private String username;
	private String password;
	
	public Adminlogin1() {
		super();
	}
	public Adminlogin1(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}


	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
}