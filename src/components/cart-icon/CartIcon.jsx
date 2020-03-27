import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.scss';

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon class="shopping-icon" />
      <span className="item-count">{itemCount} </span>
    </div>
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
