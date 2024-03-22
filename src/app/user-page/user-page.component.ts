import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule,MatButtonModule,HttpClientModule],
  providers:[ProductsService],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})

export class UserPageComponent implements OnInit{

  products: Product[] = []; 

    constructor(public mySer: ProductsService){

    }

    ngOnInit(): void {
      this.mySer.getAllProduct().subscribe(prod =>{this.products=prod})
      console.log(this.products)
   }
   
}

export interface Product {
  id:string;
  name: string;
  desc: string;
  image: string;
  price: string;
}
