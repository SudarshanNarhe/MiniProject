package com.demo.crud_demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.crud_demo.Models.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
