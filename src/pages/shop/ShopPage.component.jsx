import React, { useState } from 'react';

import PreviewCollection from '../../component/previewCollection/PreviewCollection.component';
import shop from './shop.data';

const ShopPage = () => {
  const [collection] = useState(shop);
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
export default ShopPage;
