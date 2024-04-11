package com.demo.crud_demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.crud_demo.Models.Product;

public interface ProductRepo extends JpaRepository<Product, Integer>{
	
	

}
