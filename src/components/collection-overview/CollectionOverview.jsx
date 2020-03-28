import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../previewCollection/PreviewCollection.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import './collection-overview.scss';

function CollectionOverview({ collections }) {
  return (
    <div className="collection-preview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(CollectionOverview);
