import * as cartActionTypes from './cart.types';

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
export const deleteItem = item => ({
  type: cartActionTypes.DELETE_ITEM_CART,
  payload: item
});
export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});
