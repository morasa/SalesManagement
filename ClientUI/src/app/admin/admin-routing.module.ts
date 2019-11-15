import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountsComponent } from "./discounts/discounts.component";
import { ItemsComponent } from "./items/items.component";
import { OrdersComponent } from "./orders/orders.component";
import { PricesComponent } from "./prices/prices.component";
import { ProductsComponent } from "./products/products.component";
import { AdminComponent } from "./admin/admin.component";

import { CurrentOrdersComponent } from "./orders/current-orders/current-orders.component";
import { GenerateOrderComponent } from "./orders/generate-order/generate-order.component";
import { NewOrderComponent } from "./orders/new-order/new-order.component";
import { DashboardComponent } from "./orders/dashboard/dashboard.component";

import { ProductDetailsComponent } from "../admin/products/product-details/product-details.component";
import { AddProductsComponent } from "../admin/products/add-products/add-products.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "discounts", component: DiscountsComponent },
      { path: "items", component: ItemsComponent },
      {
        path: "orders",
        component: OrdersComponent,
        children: [
          { path: "dashboard", component: DashboardComponent },
          { path: "current-orders", component: CurrentOrdersComponent },
          { path: "generate-order", component: GenerateOrderComponent },
          { path: "new-order", component: NewOrderComponent },
          { path: "", redirectTo: "dashboard", pathMatch: "prefix" }
        ]
      },
      { path: "prices", component: PricesComponent },
      {
        path: "products", component: ProductsComponent,
        children: [
          { path: 'productdetails', component: ProductDetailsComponent },
          { path: 'add-product', component: AddProductsComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
