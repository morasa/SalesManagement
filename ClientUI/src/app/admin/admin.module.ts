import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { PricesComponent } from './prices/prices.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { AdminComponent } from './admin/admin.component';
import { CurrentOrdersComponent } from './orders/current-orders/current-orders.component';
import { GenerateOrderComponent } from './orders/generate-order/generate-order.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AddProductsComponent } from './products/add-products/add-products.component';


@NgModule({
  declarations: [OrdersComponent, ProductsComponent, ItemsComponent, PricesComponent, DiscountsComponent, AdminComponent, CurrentOrdersComponent, GenerateOrderComponent, NewOrderComponent, ProductDetailsComponent, AddProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
