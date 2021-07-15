import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuardService } from './guards/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
   path:"home",
   component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
   },
   {
    path:"customers",
    component:CustomersComponent,canActivate:[AuthGuardService]
   },
   {
    path:"",
    component:HomeComponent
   }, 
   {
    path:"**",
    component:HomeComponent
   }, 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
