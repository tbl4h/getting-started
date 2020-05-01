import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// @injectable provide class available as dependency
@Injectable({
    providedIn: 'root'
})
export class CartService {

items = [];

constructor(
  // Inject HttpClient module dependecy to service (in that case it is class HttpClient)
  private http : HttpClient
) { 

}

addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    // Allows fetch data from json file 
    return this.http.get('/assets/shipping.json');
  }

}
