import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CreateproductsComponent } from './products/createproducts/createproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    CreateproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{
      path:"all-products",
      component:AllproductsComponent
    },
  {
    path:"create-product",
    component:CreateproductsComponent
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
