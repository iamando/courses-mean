import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

// reducers
import { State } from '../../app.store';

// Actions
import { AddToCart } from '../../ngrx/actions/cart.actions';

// Cookie
import * as Cookie from 'js-cookie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = Cookie.getJSON('cartItems') || [];
  cartItems$ = this.store
    .select((state) => state.cart.cartItems)
    .subscribe(
      (res) => {
        this.cartItems = res;
        this.addToCookie();
      },
      (err) => console.error(err)
    );

  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.addToCart();
  }

  addToCart(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new AddToCart(params.id));
    });
  }

  calcTotalPrice() {
    const totalPrice = this.cartItems.course.price + 20;
    return totalPrice.toFixed(2);
  }

  addToCookie() {
    Cookie.set('cartItems', JSON.stringify(this.cartItems));
  }
}
