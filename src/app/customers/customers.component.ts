import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{DataService} from 'src/app/services/data.service';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any;
  selUsuario:any = localStorage.getItem('id')
  usuarios!:any;
  idUsuario:any;
  
   
  constructor(private http:HttpClient ,private dataService:DataService) {
     
  
   }
  
  ngOnInit(): void {
     this.dataService.getUsuarios().subscribe(usuario =>{this.usuarios=Object.entries(usuario)});
     console.log(this.usuarios)
     this.http.get("https://localhost:44313/api/auth/login").subscribe(response =>{
    this.customers=response;
    
  
     
  },err =>{
    console.log(err);
    })
  }
  
 onSalir(){
   localStorage.clear()
   this.idUsuario ="Invitado";
   localStorage.setItem("id",this.idUsuario);
  
    }
}
