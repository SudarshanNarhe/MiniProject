package com.demo.crud_demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.crud_demo.IService.IUserService;
import com.demo.crud_demo.Models.User;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private IUserService userservice;
	
	@PostMapping("/saveUser")
	public User saveUser(@RequestBody User u) {
		User user= null;
		try {
			user=userservice.saveUser(u);
			System.out.println("User Saved Successfully");
			System.out.println(user);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return user;
	}
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser(){
		List<User> userlist = userservice.getAllUser();
		return userlist;
	}
	
	@PutMapping("/updateUser")
	public User upadateUser(@RequestBody User u) {
		User user= null;
		try {
			user=userservice.upateUser(u);
			System.out.println("User Saved Successfully");
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return user;
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public void deleteUser(@PathVariable int id) {
		
		try {
			userservice.deleteUser(id);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@GetMapping("/searchById/{id}")
	public User searchById(@PathVariable int id) {
		User user = null;
		try {
			user=userservice.searchById(id);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return user;
	}
	
}
