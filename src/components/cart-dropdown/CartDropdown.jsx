import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItem } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCart());
        }}
      >
        GO tO CHECKOUT
      </CustomButton>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: selectCartItem(state)
  };
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
