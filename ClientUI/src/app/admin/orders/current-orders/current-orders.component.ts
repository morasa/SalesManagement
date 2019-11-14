import { Component, OnInit } from '@angular/core';

import * as dummy from "../../../common/config/dummy.json";
@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {
  status: Array<string>;

  currentOrders = [
    {
      order_id: Math.ceil(Math.random() * 100000),
      created_date: Date.now(),
      created_by: dummy.users[Math.floor(Math.random() * dummy.users.length)].name,
      status: dummy.status[(Math.floor(Math.random() * dummy.status.length))]
    }
  ]

  constructor() { }

  ngOnInit() {
    this.status = dummy.status;
    this.initiateList();
  }
  initiateList() {
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      setTimeout(() => {
        this.currentOrders.push(
          {
            order_id: Math.ceil(Math.random() * 100000),
            created_date: Date.now(),
            created_by: dummy.users[Math.floor(Math.random() * dummy.users.length)].name,
            status: dummy.status[(Math.floor(Math.random() * dummy.status.length))]
          }
        );
      }, 1000);
    }
  }
}
