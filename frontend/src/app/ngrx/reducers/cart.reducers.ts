import { CartAction, CartActionTypes } from '../actions/cart.actions';

export interface CartState {
  cartItems: [];
}

const initialCartState: CartState = {
  cartItems: [],
};

export function cartReducers(
  state: CartState = initialCartState,
  action: CartAction
): CartState {
  switch (action.type) {
    case CartActionTypes.AddToCart:
      // const item = action.payload;
      // const course = state.cartItems.find((x) => x.course === item.course);

      // if (course) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((x) =>
      //       x.course === course.course ? course : x
      //     ),
      //   };
      // } else {
      //   return {
      //     cartItems: [...state.cartItems, item],
      //   };
      // }
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
}
