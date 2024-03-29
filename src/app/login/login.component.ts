import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginDataService } from '../login-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers:[LoginDataService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

    username='';
    password='';
    error='';

  constructor(private router: Router, public mySer: LoginDataService) {

  }

  login(){
    this.error='';
    this.mySer.getData().subscribe((result: { email: string, password: string }[])=>{
      const user=result.find(u =>u.email===this.username && u.password===this.password);
      if(user){
       console.log('Login Succesful')
       if(user.email=='admin@mail.com' && user.password=='admin@123'){
            this.router.navigate(['/AdminPage'])
       }else{
          this.router.navigate(['/UserPage'])
       }
      }else{
        this.error='Invalid username or password';
        this.username='';
        this.password='';
      }
    })
  }


  
  opensignUp() {
    this.router.navigate(['/SignUp']);
  }
}
