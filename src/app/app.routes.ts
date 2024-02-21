import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'SignUp',component:SignUpComponent},
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent},
];
