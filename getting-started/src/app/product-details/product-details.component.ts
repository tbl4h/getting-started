import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from './../cart.service';
// Possible scenario of class initialization *

// *Execute third or first 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // *Definition
  product;
  // *Execute first 
  constructor(
    // ActivatedRoute provide use commponent as a service
    // Service share data beetwen parts of application
    // ActivateRoute similar to @Injectable decorator in service
    private route: ActivatedRoute,
    // Dependency injection from CartService 
    private cartService: CartService,
    ) { 
      
    }
    // *Execute second almost as initialization list
    ngOnInit() {                                   // though --> however
      // Bind product propertie from products.ts data through ActivateRoute method       
      this.route.paramMap.subscribe(params => {
        // Declaration product
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
