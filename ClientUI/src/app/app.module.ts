import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonComponentComponent } from './common-component/common-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CommonComponentComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UsersModule,
    LoginModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
