import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup,FormBuilder,FormControl , Validators } from "@angular/forms";
import {AddproductsService} from "../../../services/addproducts.service"
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private addproductservice : AddproductsService) { }

//addproductform : FormGroup

addproductform = new FormGroup({
  product_code : new FormControl('',Validators.required),
  product_name : new FormControl('',Validators.required),
  product_category:new FormControl('',Validators.required),
  product_manufacture:new FormControl('',Validators.required),
  product_status:new FormControl('',Validators.required)
}) 
productsobj;
  ngOnInit() {


  }
productcategorys = ["Choose Category","Food","Kitchen","Washing"];
productmanufature = ["Choose Manfacturer",'Nestle','SurfEcXcel','Ashirvad'];
productstatus =["Choose Status","Active", "InActive"]
addproduct(){
this.productsobj = this.addproductform.value
  console.log("added" ,this.productsobj )
  let productsobserver = this.addproductservice.addproducts(this.productsobj)
  productsobserver.subscribe(data =>{
    console.log(data)
  }) 

}
}
