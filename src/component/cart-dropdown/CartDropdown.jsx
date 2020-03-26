import React from 'react';

import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';
function CartDropdown({ isHidden }) {
  return (
    !isHidden && (
      <div className="cart-dropdown">
        <div className="cart-items">
          <CustomButton>GO tO CHECKOUT</CustomButton>
        </div>
      </div>
    )
  );
}

function mapStateToProps(state) {
  return {
    isHidden: state.cart.isHidden
  };
}
export default connect(mapStateToProps)(CartDropdown);
