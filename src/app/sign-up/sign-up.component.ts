import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  Mycontact!:Contact;
  
  ngOnInit(): void {
      this.Mycontact={
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        confirmPass:"",
        gender:false,
      }
  }

  onSubmit(){
    console.log(this.Mycontact)
    
  }

}

export class Contact{
  firstName!:string;
  lastName!:string;
  username!:string;
  email!:string;
  password!:string;
  confirmPass!:string;
  gender!:boolean;
}
