import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';
import './previewCollection.scss';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((el, i) => i < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem
              key={id}
              id={id}
              {...otherItemProps}
            ></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
