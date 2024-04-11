package com.demo.crud_demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.demo.crud_demo.Models.User;

public interface LoginRepo extends JpaRepository<User, Integer>{
	
	@Query("SELECT u FROM User u WHERE u.email = ?1 AND u.password=?2")
	User findByMail(String email, String password);

}
