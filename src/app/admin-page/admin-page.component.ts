import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [ProductsService],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
})
export class AdminPageComponent implements OnInit {
  products: Product[] = [];

  showForm: boolean = false;

  isUpdate: boolean = false;

  isDisable:boolean=false;

  newProduct: Product = {
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  };

  // productForm!: NgForm;
  @ViewChild('productForm') productForm!:NgForm;

  constructor(public mySer: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.mySer.getAllProduct().subscribe((result) => {
      this.products = result;
    });
  }

  toggleProductForm() {
    
    this.showForm = !this.showForm; // Toggle form visibility  
  }

  AddProduct(newProductForm: NgForm) {
    // console.log(newProductForm.value)

    if (newProductForm.valid) {
      if (this.isUpdate) {
        this.newProduct = newProductForm.value;
        this.mySer.UpdateData(this.newProduct.id, this.newProduct).subscribe(
          (response) => {
            console.log('Product added successfully:', response);
            alert('Product added successfully!!!');
            this.getAllProducts();
            this.showForm=!this.showForm;
            this.isUpdate=false;
            this.clearForm();
           // window.location.reload();
          },
          (error) => {
            console.error('Error adding product: ', error);
            alert('Error adding product.... ');
          }
        );
      
    }
      else{
      this.newProduct = newProductForm.value;
      this.mySer.AddItems(this.newProduct).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          alert('Product added successfully!!!');
          this.getAllProducts();
          this.showForm=!this.showForm;
          this.clearForm();
          this.getAllProducts();
        },
        (error) => {
          console.error('Error adding product: ', error);
          alert('Error adding product.... ');
        }
      );
      }
    } else {
      alert('Please fill in all required fields');
    }
  }

  clearForm(){
    this.productForm.resetForm();
  }

  @ViewChild('formScroll') productFormElement!: ElementRef;

  

  toggleforUpdate(product: Product) {
    this.isUpdate = true;
    this.isDisable = true;
    this.newProduct = { ...product }; // Clone the product to avoid modifying the original
    this.showForm = true;
    
    this.scrollToForm();
  }

  scrollToForm() {
    if (this.productFormElement && this.productFormElement.nativeElement) {
      this.productFormElement.nativeElement.scrollIntoView({ behavior: 'smooth'});
    }
  }

  hideForm() {
    this.showForm = false;
    window.location.reload();
  }

  deleteItem(id: any) {
    let res = confirm('Do you want to delete the Item of ID ' + id + ' ?');
    if (res == true) {
      this.mySer.deleteItem(id).subscribe((result) => {
        alert('Item deleted Successfully');
        this.getAllProducts();
      });
    }
  }
}
