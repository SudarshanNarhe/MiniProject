package com.demo.crud_demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.crud_demo.IService.IUserService;
import com.demo.crud_demo.Models.User;
import com.demo.crud_demo.Repositories.UserRepo;

@Service
public class UserService implements IUserService{
	
	@Autowired
	private UserRepo userrepo;
	
	@Override
	public List<User> getAllUser() {
		List<User> userlist= userrepo.findAll();
		return userlist;
	}

	@Override
	public User saveUser(User u) {
		User user = userrepo.save(u);
		return user;
	}

	@Override
	public User upateUser(User u) {
		User user = userrepo.save(u);
		return user;
	}

	@Override
	public void deleteUser(int id) {
		userrepo.deleteById(id);
		
	}

	@Override
	public User searchById(int id) {
		User user  =userrepo.findById(id).get();
		return user;
	}
//	
//	private User setUser(User u) {
//		User user=new User();
//		user.setId(u.getId());
//		user.setFirstname(u.getFirstname());
//		user.setLastname(u.getLastname());
//		user.setEmail(u.getEmail());
//		user.setPassword(u.getPassword());
//		return user;
//	}

}
