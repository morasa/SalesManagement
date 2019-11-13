import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from "./orders/orders.component";
import { CurrentOrdersComponent } from "./current-orders/current-orders.component";
import { GenerateOrderComponent } from "./generate-order/generate-order.component";
import { NewOrderComponent } from "./new-order/new-order.component";

const routes: Routes = [
  {
    path: "orders", component: OrdersComponent, children: [
      {
        path: "",
        children: [
          { path: "current-order", component: CurrentOrdersComponent },
          { path: "generate-order", component: GenerateOrderComponent },
          { path: "new-order", component: NewOrderComponent },
          { path: "", redirectTo: "current-order", pathMatch: "full" }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
