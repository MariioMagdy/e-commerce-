import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin:any

  constructor(private _user:UserService, private _router:Router) { }
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  ngOnInit(): void {
  }

  myForm= new FormGroup({
    email:new FormControl("",[]),
    password:new FormControl("",[])
  })
  handelLogin(){
    this.userlogin=this.myForm.value
    console.log(this.myForm.value);
    this._user.loginUser(this.userlogin).subscribe(res=>{
      if(res.token !== undefined){
        console.log(res.token);
        this._user.token=res.token
        this.Toast.fire({
          icon: 'success',
          title: 'Welcome to our Website'
        })
        this._router.navigate(["/shop"])
      }else{
        this.Toast.fire({
          icon: 'error',
          title: 'Invalid User'
        })
      }
    })
  }
}
