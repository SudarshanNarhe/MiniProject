package com.demo.crud_demo.IService;

import java.util.List;

import com.demo.crud_demo.Models.User;

public interface IUserService {
	
	List<User> getAllUser();
	User saveUser(User u);
	User upateUser(User u);
	void deleteUser(int id);
	User searchById(int id);
	
}
