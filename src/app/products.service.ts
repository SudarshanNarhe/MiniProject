import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="http://localhost:3000/products"

  constructor(public myHttp : HttpClient) {

   }

   getAllProduct():Observable<any>{
      return this.myHttp.get<any>(this.url);
   }

}
