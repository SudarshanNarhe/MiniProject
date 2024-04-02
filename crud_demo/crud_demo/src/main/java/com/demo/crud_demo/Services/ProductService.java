package com.demo.crud_demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.crud_demo.IService.IProductService;
import com.demo.crud_demo.Models.Product;
import com.demo.crud_demo.Repositories.ProductRepo;

@Service
public class ProductService implements IProductService{
	
	@Autowired
	private ProductRepo productRepo;
	
	@Override
	public List<Product> getAllProducts() {
		List<Product> productlist=productRepo.findAll();
		return productlist;
	}

	@Override
	public Product saveProduct(Product p) {
		Product res = productRepo.save(p);
		return res;
	}

	@Override
	public Product updateProduct(Product p) {
		Product res = productRepo.save(p);
		return res;
	}

	@Override
	public void deleteProduct(int id) {
		
		productRepo.deleteById(id);
		
	}
	
	@Override
//	@SuppressWarnings("deprecation")
	public Product searchByID(int id) {
		Product prd=productRepo.findById(id).get();
		return prd;
	}
	
//	private Product setProduct(Product product) {
//		Product p = new Product();
//		p.setId(product.getId());
//		p.setName(product.getName());
//		p.setPrice(product.getPrice());
//		p.setDesc(product.getDesc());
//		return p;
//	}

}
