import React from 'react';
import { connect } from 'react-redux';

import { removeItem, deleteItem, addItem } from '../../redux/cart/cart.actions';

import './check-out-item.scss';

function Checkoutitem({ cartItem, deleteItem, removeItem, addItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          {' '}
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          {' '}
          &#10095;
        </div>{' '}
      </span>
      <span className="price">{price} </span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}
const dispatchMapToProps = dispatch => ({
  deleteItem: cartItem => dispatch(deleteItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem))
});
export default connect(null, dispatchMapToProps)(Checkoutitem);
