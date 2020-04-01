import React from 'react';

import { CartItemContainer, ItemDetailContainer } from './CartItem.style';
import './cart-item.scss';
function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailContainer>
        <span>{name} </span>
        <span>
          {quantity} x {price}{' '}
        </span>
      </ItemDetailContainer>
    </CartItemContainer>
  );
}

export default CartItem;
