import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { GenerateOrderComponent } from './generate-order/generate-order.component';


@NgModule({
  declarations: [OrdersComponent, CurrentOrdersComponent, NewOrderComponent, GenerateOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
