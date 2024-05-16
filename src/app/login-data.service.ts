import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  //url = 'http://localhost:3000/data';
 
  url="http://localhost:8080/user/"

  constructor(public myClient:HttpClient) {

   }

   getData():Observable<any>{
    return this.myClient.get<any>(this.url+"getAllUser");
    //return this.myClient.get<any>(this.url);
   }

   AddUser(User:any):Observable<any>{

    let userdata={
      firstname:User.firstname,
      lastname:User.lastname,
      username:User.username,
      password:User.password,
      email:User.email,
      userrole:'User'
    }
    return this.myClient.post<any>(this.url+"saveUser",userdata).pipe(catchError(this.errorHandler));
    // return this.myClient.post<any>(this.url,userdata).pipe(catchError(this.errorHandler));
  }

   errorHandler(error:any){
      let errormsg="";

      if(error.er instanceof ErrorEvent){
        errormsg=error.errormsg;
      }
      else{
        errormsg=`Error code ${error.status} \n Message : ${error.Message}`
      }
      console.log(errormsg)
      return throwError(()=>new Error (errormsg))
   }

   UpdateData(username:any, user:any):Observable<any>{
    
      return this.myClient.put<any>(`${this.url+"updateUser"}'/'${username}`,user).pipe(this.errorHandler)
   }
   

}
