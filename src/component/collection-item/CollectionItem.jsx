import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {' '}
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>

      <div className="collection-footer">
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}
export default connect(null, mapDispatchToProps)(CollectionItem);
