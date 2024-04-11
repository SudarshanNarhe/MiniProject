package com.demo.crud_demo.IService;

import java.util.List;

import com.demo.crud_demo.Models.Product;

public interface IProductService {
	
	List<Product> getAllProducts();
	Product saveProduct(Product p);
	Product updateProduct(Product p);
	void deleteProduct(int id);
	Product searchByID(int id);
}
