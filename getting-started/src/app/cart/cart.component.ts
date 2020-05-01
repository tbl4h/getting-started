import { Component, OnInit } from '@angular/core';
//FormBuilder service provide convenient methods for genereting controls 
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    
    ) { 
    
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      aa: '',      
    });
    
    }


  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}


/**** TODO ****/
/* Agian analyze flow of Angular component construction */






