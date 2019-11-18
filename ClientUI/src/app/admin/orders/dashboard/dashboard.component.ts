import { Component, OnInit } from '@angular/core';
import * as dummy from "../../../common/config/dummy.json";

class receivedModel { "Order ID": String; "Created Date": Date; "Received Date": Date }
class savedModel { "Order ID": String; "Saved Date": Date; "Created By": String }
class inprocessModel { "Order ID": String; "Created Date": Date; "Created By": String }
class createdModel { "Order ID": String; "Created Date": Date; "Created By": String }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date: Date = new Date()
  receivedOrders: receivedModel[] = [
    { "Order ID": "", "Created Date": this.date, "Received Date": this.date }
  ]
  savedOrders: savedModel[] = [
    { "Order ID": "", "Saved Date": this.date, "Created By": "" }
  ]
  inprocessOrders: inprocessModel[] = [
    { "Order ID": "", "Created Date": this.date, "Created By": "" }
  ]
  createdOrders: createdModel[] = [
    { "Order ID": "", "Created Date": this.date, "Created By": "" }
  ]

  tables = {
    "Received Orders": this.receivedOrders,
    "Saved Orders": this.savedOrders,
    "Inprocess Orders": this.inprocessOrders,
    "Created Orders": this.createdOrders
  };

  constructor() { }

  randNum() {
    return (Math.ceil(100000 + (Math.random() * 100000))).toString();
  }
  ngOnInit() {
    this.createdOrders.shift();
    this.inprocessOrders.shift();
    this.receivedOrders.shift();
    this.savedOrders.shift();
    for (let i = 0; i < 5; i++) {
      this.createdOrders.push({ "Order ID": this.randNum(), "Created Date": this.date, "Created By": dummy.users[Math.floor(Math.random() * dummy.users.length)].name })
      this.inprocessOrders.push({ "Order ID": this.randNum(), "Created Date": this.date, "Created By": dummy.users[Math.floor(Math.random() * dummy.users.length)].name })
      this.receivedOrders.push({ "Order ID": this.randNum(), "Created Date": this.date, "Received Date": this.date })
      this.savedOrders.push({ "Order ID": this.randNum(), "Saved Date": this.date, "Created By": dummy.users[Math.floor(Math.random() * dummy.users.length)].name })
    }
  }
}
