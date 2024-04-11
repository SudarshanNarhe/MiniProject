package com.demo.crud_demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.crud_demo.Models.User;
import com.demo.crud_demo.Services.LoginService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private LoginService loginservice;
	
	  @PostMapping("/signin")
	  public String login(@RequestBody User u)
	  {
	    User user=loginservice.loginUser(u.getEmail(), u.getPassword()); 
	
	    System.out.println("User:"+user);
	    return "Login Successfully";
	  }
}
