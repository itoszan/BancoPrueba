import { Component} from '@angular/core';
import { Router } from '@angular/router';
import{JwtHelperService, JwtModule}from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  UsuarioId:any;
 
 
  constructor(private router:Router, private jwtHelper:JwtHelperService) {
    this.UsuarioId=localStorage.getItem('id');
   }

  isUserAuthenticate(){
    
    const token:any = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else{
      return false;
    }
    
  }  

  logOut(){
    localStorage.removeItem("jwt");
  }  
 

}
