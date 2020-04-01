import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import {
  BackgroundCountainer,
  CollectionFooterContainer,
  CollectionItemContainer
} from './CollectionItem.style';
import { addItem } from '../../redux/cart/cart.actions';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundCountainer imageUrl={imageUrl}>
        {' '}
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </BackgroundCountainer>

      <CollectionFooterContainer>
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item))
  };
}
export default connect(null, mapDispatchToProps)(CollectionItem);
