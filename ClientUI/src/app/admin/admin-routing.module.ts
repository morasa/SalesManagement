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


import {ProductDetailsComponent} from "../admin/products/product-details/product-details.component";
import {AddProductsComponent} from "../admin/products/add-products/add-products.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "discounts", component: DiscountsComponent },
      { path: "items", component: ItemsComponent },
      {
        path: "",
        component: OrdersComponent,
        children: [
          { path: "", component: CurrentOrdersComponent },
          { path: "generate-order", component: GenerateOrderComponent },
          { path: "new-order", component: NewOrderComponent }
        ]
      },
      { path: "prices", component: PricesComponent },
      { path: "products", component: ProductsComponent,
      children: [
        {path:'', component :ProductDetailsComponent},
        {path:'add-product', component:AddProductsComponent}
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
