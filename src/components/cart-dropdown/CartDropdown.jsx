import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItem } from '../../redux/cart/cart.selectors';

import {
  CartItemContainer,
  CartDropDownContainer,
  EmptyMessageContainer
} from './CartDropDown.style';
import './cart-dropdown.scss';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <CartDropDownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO tO CHECKOUT
      </CustomButton>
    </CartDropDownContainer>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: selectCartItem(state)
  };
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
