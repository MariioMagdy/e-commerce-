import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  commonURL="http://localhost:3000"
  constructor(private _http:HttpClient) { }

  /***Post user data to API */
  userData(data):Observable<any>{
  return  this._http.post(`${this.commonURL}/register`,data)
  }
}
