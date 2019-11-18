import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddproductsService {

  constructor(private http : HttpClient) { }

  addproducts(data){
    return this.http.post("http://127.0.0.1:5005/addproduct",data)
  }
  getproducts(){
    return this.http.get("http://127.0.0.1:5005/getproducts")
  }
}
