import * as cartActionTypes from './cart.types';
import {
  AddItemToCart,
  deleteItemFromCart,
  removeItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
};

function cartReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, payload)
      };
    case cartActionTypes.DELETE_ITEM_CART:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    default:
      return state;
  }
}

export default cartReducer;
