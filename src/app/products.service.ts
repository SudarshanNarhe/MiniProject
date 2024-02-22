import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000/products';

  constructor(public myHttp: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.myHttp.get<any>(this.url);
  }

  deleteItem(id: any): Observable<any> {
    return this.myHttp.delete<any>(this.url + '/' + id).pipe(catchError(this.errorHandler));
  }

  UpdateData(id:any, data:any):Observable<any>{
    return this.myHttp.put<any>(`${this.url}/${id}`,data).pipe(catchError(this.errorHandler))
  }

  AddItems(data:any):Observable<any>{

    let itemsdetails={
      id:data.id,
      name:data.name,
      description:data.description,
      image:data.image,
      price:data.price
    }
    return this.myHttp.post(this.url,itemsdetails).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    let errormsg = '';

    if (error.error instanceof ErrorEvent) {
      errormsg = error.errormsg;
    } else {
      errormsg = `Error code : ${error.status} \n Message : ${error.Message}`;
    }
    console.log(errormsg);
    return throwError(() => new Error(errormsg));
  }
}
