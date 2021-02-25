import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor(private _allusers:UserService) { }

  ngOnInit(): void {
    this.allusers()
  }
  allusers(){
    this._allusers.allusers().subscribe(res=>{
      console.log(res);
    })
  }
}
