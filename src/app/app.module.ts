import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DataService} from 'src/app/services/data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{ HttpClientModule} from '@angular/common/http'
import{FormsModule}from '@angular/forms'
import{JwtModule}from '@auth0/angular-jwt';
import { CustomersComponent } from './customers/customers.component'

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    JwtModule.forRoot({
       config:{
         tokenGetter:tokenGetter,
         allowedDomains:[""],
         disallowedRoutes:[]
       }
    })
  ],

  


  providers: [DataService],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    HomeComponent,
    CustomersComponent
  ]
})
export class AppModule { }
