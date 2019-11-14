import { Component, OnInit } from '@angular/core';
import * as Productdetails from "../../../common/config/products.json"
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product_details = Productdetails['default']
  constructor() { }

  ngOnInit() {
    //console.log(this.product_details)
  }

}
