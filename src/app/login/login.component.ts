import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin:any;
  idUsuario:any;

  constructor(private router:Router, private http:HttpClient) {
   
   }
   login(form:NgForm){
     const credentials ={
       'Username':form.value.username,
       'Password':form.value.password
     }
     localStorage.clear();
     this.idUsuario = form.value.username,
     localStorage.setItem("id",this.idUsuario)
     this.http.post("https://localhost:44313/api/auth/login",credentials).subscribe(Response=>{
       const token =(<any>Response).token;
       localStorage.setItem("jwt",token);
       this.invalidLogin = false;
       this.router.navigate(["/"]);
       
    },err =>{
      this.invalidLogin = true;
      localStorage.clear();
      this.idUsuario ="Invitado";
      localStorage.setItem("id",this.idUsuario);
    }
     )
   }
}
