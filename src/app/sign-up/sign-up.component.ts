import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { LoginDataService } from '../login-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,MatSnackBarModule],
  providers:[LoginDataService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  Mycontact!:any;
  // User!:FormGroup;

constructor(public myUser : LoginDataService, public msg:MatSnackBar){

}

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
    // let us=this.User.value;
    console.log(this.Mycontact)
    this.myUser.AddUser(this.Mycontact).subscribe(result=>{
      this.AfterSubmitMsg('User registration successful!', 'Close');
    });
  }

    AfterSubmitMsg(Message: string, action:string){
      this.msg.open(Message, action,{duration:5000});
    }


}



