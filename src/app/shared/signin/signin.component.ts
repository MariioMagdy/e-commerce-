import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../services/user/user.service"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userData:any
  respononse:any
  badRequest:any

   myForm = new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      email:new FormControl("",[Validators.required,Validators.email,Validators.maxLength(30)]),
      phoneNumber:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.pattern("^(01)[0-9]{9}$")]),
      password:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(8),Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$")]),
   })


  constructor(private _UserService:UserService) { }

  ngOnInit(): void {
  }

  handleSubmitForm(){
    this._UserService.userData(this.userData).subscribe(res=>{
      this.respononse= res.message

    },err=>{
      console.log(err.statusText);
      this.badRequest=err.statusText

    })
    console.log(this.myForm);
    console.log(this.myForm.value);
    this.userData=this.myForm.value

  }

}
