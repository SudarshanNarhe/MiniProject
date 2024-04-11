package com.demo.crud_demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.crud_demo.IService.ILoginService;
import com.demo.crud_demo.Models.User;
import com.demo.crud_demo.Repositories.LoginRepo;

@Service
public class LoginService implements ILoginService{

	@Autowired
	LoginRepo loginrepo;
	
	@Override
	public User loginUser(String email, String password) {
		User u = loginrepo.findByMail(email,password);
		return u;
	}

}
