import { Component, OnInit } from '@angular/core';

class receivedModel { "Order ID": String; "Created Date": String; "Received Date": String }
class savedModel { "Order ID": String; "Saved Date": String; "Created By": String }
class inprocessModel { "Order ID": String; "Created Date": String; "Created By": String }
class createdModel { "Order ID": String; "Created Date": String; "Created By": String }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  receivedOrders: receivedModel[] = [
    { "Order ID": "", "Created Date": "", "Received Date": "" }
  ]
  savedOrders: savedModel[] = [
    { "Order ID": "", "Saved Date": "", "Created By": "" }
  ]
  inprocessOrders: inprocessModel[] = [
    { "Order ID": "", "Created Date": "", "Created By": "" }
  ]
  createdOrders: createdModel[] = [
    { "Order ID": "", "Created Date": "", "Created By": "" }
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
    for (let i = 0; i < 5; i++) {
      this.createdOrders.shift();
      this.inprocessOrders.shift();
      this.receivedOrders.shift();
      this.savedOrders.shift();
      setTimeout(() => {
        this.createdOrders.push({ "Order ID": this.randNum(), "Created Date": this.randNum(), "Created By": "Aditya" })
        this.inprocessOrders.push({ "Order ID": this.randNum(), "Created Date": this.randNum(), "Created By": "Aditya" })
        this.receivedOrders.push({ "Order ID": this.randNum(), "Created Date": this.randNum(), "Received Date": this.randNum() })
        this.savedOrders.push({ "Order ID": this.randNum(), "Saved Date": this.randNum(), "Created By": "Aditya" })
      }, 1000)
    }
  }

}
