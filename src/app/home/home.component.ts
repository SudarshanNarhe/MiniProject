import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,MatCardModule],
  providers:[ProductsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Product[] = []; 

  constructor(public mySer: ProductsService, public router : Router){

  }

  ngOnInit(): void {
    this.mySer.getAllProduct().subscribe(prod =>{this.products=prod})
    console.log(this.products)
 }

 showLoginPage(){
  this.router.navigate(['/Login']);
 }
 
}

export interface Product {
id:string;
name: string;
description: string;
image: string;
price: string;
}