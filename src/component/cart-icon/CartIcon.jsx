import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

function CartIcon({ toggleCart }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon class="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

function mapDispatchToProps(disptach) {
  return {
    toggleCart: () => disptach(toggleCart())
  };
}
export default connect(null, mapDispatchToProps)(CartIcon);
