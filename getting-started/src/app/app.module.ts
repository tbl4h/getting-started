import { CartService } from './cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Http client module allows to fetch data from external API as a stream
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
         { path: '', component: ProductListComponent },
         // Declare variable productId as final segment. Whole path navigate to ProductDetailsCompnent .   
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent },
         { path: 'shipping', component: ShippingComponent },
       ])
     ],
   
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductDetailsComponent,
      ProductAlertsComponent,
      CartComponent,
      ShippingComponent
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [
      CartService
   ]
})
export class AppModule { }


