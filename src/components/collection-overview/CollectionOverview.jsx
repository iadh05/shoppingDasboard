import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PreviewCollection from '../previewCollection/PreviewCollection.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors';
import './collection-overview.scss';
import { CollectionPreviewContainer } from './CollectionOverview.style';

function CollectionOverview({ collections }) {
  return (
    <CollectionPreviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </CollectionPreviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});
export default connect(mapStateToProps)(CollectionOverview);
