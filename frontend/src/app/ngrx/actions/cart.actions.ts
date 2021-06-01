import { Action } from '@ngrx/store';

export enum CartActionTypes {
  AddToCart = 'Add To Cart',
}

export class CartAction implements Action {
  type: string;
  payload?: any;
}

export class AddToCart implements Action {
  public readonly type = CartActionTypes.AddToCart;
  constructor(public payload: any) {}
}

export type CartActions = AddToCart;
