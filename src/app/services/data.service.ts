import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {   
  

  constructor( private http:HttpClient) { }
  headers:HttpHeaders = new HttpHeaders ({
    "Content-type":"Aplication/json"
  });
      myAppURL='https://localhost:44313/';
      myApiURL='api/LogIn'
      myApiURLId='api/LogIn/{id}'   
      url2=(this.myAppURL + this.myApiURL)
      filtroId : any; 
  

    getUsuarios() {
    this.filtroId = localStorage.getItem('id')    
    const url = `${this.url2}/${this.filtroId}`;   
    return this.http.get(url)}       
  
}
