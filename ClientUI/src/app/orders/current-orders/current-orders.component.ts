import { Component, OnInit } from '@angular/core';
import { CurrentOrders } from "../../models/current-orders";
import users from "../../_common/hardcodedData.json";

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit {
  status: Array<string>;

  currentOrders: CurrentOrders[] = [
    {
      order_id: Math.ceil(Math.random() * 100000),
      created_date: Date.now(),
      created_by: users.users[Math.floor(Math.random() * users.users.length)].name,
      status: users.status[(Math.floor(Math.random() * users.status.length))]
    }
  ]

  constructor() { }

  ngOnInit() {
    this.status = users.status;
    this.initiateList();
  }
  initiateList() {
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      setTimeout(() => {
        this.currentOrders.push(
          {
            order_id: Math.ceil(Math.random() * 100000),
            created_date: Date.now(),
            created_by: users.users[Math.floor(Math.random() * users.users.length)].name,
            status: users.status[(Math.floor(Math.random() * users.status.length))]
          }
        );
      }, 1000);
    }
  }
}
