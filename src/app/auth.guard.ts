import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _user:UserService, private _router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any{
      if(localStorage.getItem("token")) {
        // alert("you have access")
        // this._router.navigate(["shop"])
        return true
      }else{
        this._router.navigateByUrl("login")
      }

  }

}
