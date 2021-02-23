import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { SigninComponent } from './shared/signin/signin.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"home" ,redirectTo:"HomeComponent"},
  {path:"signin" ,component:SigninComponent},
  {path:"login" ,component:LoginComponent},
  {path:"**" ,redirectTo:"HomeComponent"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
