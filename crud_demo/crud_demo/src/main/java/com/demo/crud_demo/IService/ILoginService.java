package com.demo.crud_demo.IService;

import com.demo.crud_demo.Models.User;

public interface ILoginService {
	
	User loginUser(String email, String password);
}
