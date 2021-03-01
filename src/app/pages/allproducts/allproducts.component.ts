import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';
// import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  allProducts:any[]=[]
  p: number = 1;
  collection: any[] = this.allProducts;
  constructor(private _allproducts:ProductService) {

    console.log(this.collection);

   }



  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts():any{
    this._allproducts.getAllproducts().subscribe(res=>{
      console.log(res.data);
      this.allProducts = res.data
      this.collection =res.data
    })
  }
  pageChanged(pee:number){

    document.getElementById("top").scrollIntoView()

  }

}
