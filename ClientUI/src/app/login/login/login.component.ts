import { Component, OnInit } from '@angular/core';
import users from "../../_common/hardcodedData.json";

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  type: string;

  constructor(private route:Router) { }

  ngOnInit() {
    this.checkLogin();
  }

  login() {
    users.users.forEach(user => {
      if (user.name == this.username && user.password == this.password) {
        this.type = user.type;
        let myObj = {
          name: user.name,
          type: user.type,
          token_id: 100000 + Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("token-id", JSON.stringify(myObj));

        this.route.navigate(["/orders"]);
      }
    })
  }
  checkLogin(){
    if(localStorage.getItem("token-id")){
      this.route.navigate(["/orders"]);
    }
  }
}
