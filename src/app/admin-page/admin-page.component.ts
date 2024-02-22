import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(public mySer: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.mySer.getAllProduct().subscribe((result) => {
      this.products = result;
    });
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

  UpdateItem(id: any) {
    // this.mySer.UpdateData(id, data).subscribe(result =>{
    // })
  }
}
