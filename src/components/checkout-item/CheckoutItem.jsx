import React from 'react';
import { connect } from 'react-redux';

import { removeItem, deleteItem, addItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton
} from './CheckoutItem.style';

import './check-out-item.scss';

function CheckoutItem({ cartItem, deleteItem, removeItem, addItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name} </TextContainer>
      <QuantityContainer>
        <span onClick={() => removeItem(cartItem)}> &#10094;</span>
        <div>{quantity}</div>
        <span onClick={() => addItem(cartItem)}> &#10095;</span>{' '}
      </QuantityContainer>
      <TextContainer>{price} </TextContainer>
      <RemoveButton onClick={() => deleteItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
const dispatchMapToProps = dispatch => ({
  deleteItem: cartItem => dispatch(deleteItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem))
});
export default connect(null, dispatchMapToProps)(CheckoutItem);
