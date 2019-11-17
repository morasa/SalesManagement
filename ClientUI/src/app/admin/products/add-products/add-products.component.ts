import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
productcategorys = ["Food","Kitchen","Washing"];
productmanufature = ['Nestle','SurfEcXcel','Ashirvad'];
productstatus =["Active", "InActive"]
addproduct(){
  console.log("added")
}
}
