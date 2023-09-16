package com.demo;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.demo.Repository.Registration;
import com.demo.model.registration;

@SpringBootApplication
public class OnlineexamApplication {

//	@Autowired
//	private Registration reg;
	public static void main(String[] args) {
		SpringApplication.run(OnlineexamApplication.class, args);
	}

//	@Bean
//	public void test()
//	{
		
//		registration regtable= new registration();
//		Date date = new Date(2023, 1, 15);
//		regtable.setDate(date);
//		
//		regtable.setEmail("d@f.com");
//		regtable.setGender("M");
//		regtable.setFirstname("ABC");
//		regtable.setLastname("XYZ");
//		regtable.setMobilenumber("98900256456");
//		regtable.setPassword("123");
//		
//		reg.save(regtable);
//		System.out.println("Hello save...................😊😊😊😊😊😊😊😊😊😊");
		
		
//	}
	
	
}
