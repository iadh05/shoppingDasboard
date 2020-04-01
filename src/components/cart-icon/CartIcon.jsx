import React from 'react';
import { connect } from 'react-redux';

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconSVGContainer
} from './CartIcon.style';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

function CartIcon({ toggleCart, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIconSVGContainer />
      <ItemCountContainer>{itemCount} </ItemCountContainer>
    </CartIconContainer>
  );
}

function mapDispatchToProps(disptach) {
  return {
    toggleCart: () => disptach(toggleCart())
  };
}
function mapStateToProps(state) {
  return {
    itemCount: selectCartItemsCount(state)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
