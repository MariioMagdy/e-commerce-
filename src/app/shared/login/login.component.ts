import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin:any

  constructor(private _user:UserService, private _router:Router , private activatedRouter:ActivatedRoute) { }
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

        console.log(res.token);
        this._user.token=res.token
        this.Toast.fire({
          icon: 'success',
          title: 'Welcome to our Website'
        })
        localStorage.setItem("token","Bearer " + res.token)
        this._router.navigate(["shop"])
    })
  }
}
