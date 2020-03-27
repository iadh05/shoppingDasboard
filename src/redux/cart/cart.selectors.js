import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItem], cartItem =>
  cartItem.reduce(
    (accumulatorQuantity, currentItem) =>
      accumulatorQuantity + currentItem.quantity,
    0
  )
);
export const selectCartItemTotal = createSelector([selectCartItem], cartItem =>
  cartItem.reduce(
    (accumulatorQuantity, currentItem) =>
      accumulatorQuantity + currentItem.quantity * currentItem.price,
    0
  )
);
