import { Component, OnInit } from '@angular/core';
import * as Productdetails from "../../../common/config/products.json";
import {AddproductsService} from "../../../services/addproducts.service"
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
//product_details = Productdetails['default']
  constructor(private productservice:AddproductsService) { }
  product_details
  ngOnInit() {
    //console.log(this.product_details)
    let getdata = this.productservice.getproducts();
    getdata.subscribe(data=>{
     this.product_details = data['productslist'];
     
    })
  }

}
