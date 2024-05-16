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

import com.demo.crud_demo.IService.IProductService;
import com.demo.crud_demo.Models.Product;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private IProductService productservice;
	
	//RequestBody map the Http body to a transfer enabling
	//Automatic deserilization of inbound HttpRequest Body onto a java Object 
	@PostMapping("/saveProduct")
	public Product saveProduct(@RequestBody Product p) {
		System.out.println("Inside SaveProduct");
		Product res = null;
		
		try {
			res=productservice.saveProduct(p);
			System.out.println("Save Product Successfully");
			System.out.println(res);
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		return res;
	}
	
	@GetMapping("/getallproducts")
	public List<Product> getAllProduct(){
		return productservice.getAllProducts();
	}
	
	//@PathVariable is use to take value from the url and pass to method 
	@DeleteMapping("/deleteProduct/{id}")
	public void deleteProduct(@PathVariable int id) {
		
		try {
			productservice.deleteProduct(id);
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	
	@PutMapping("/updateProduct/{id}")
	public Product updateProduct(@RequestBody Product p) {
		System.out.println("Inside updateProduct");
		Product res = null;
		
		try {
			res=productservice.updateProduct(p);
			System.out.println("Product Updated Successfully");
			System.out.println(res);
		}catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		return res;
	}
	
	@GetMapping("/searchById/{id}")
	public Product searchByID(@PathVariable int id) {
		Product res=null;
		System.out.println("id:"+id);
		try {
			res=productservice.searchByID(id);
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return res;
	}
	
}
