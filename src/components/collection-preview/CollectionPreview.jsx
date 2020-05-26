import React, { memo } from 'react';

import './CollectionPreview.scss';

import CollectionItem from '../collection-item';

const MAX_ITEM_PREVIEW = 4;

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_item, idx) => idx < MAX_ITEM_PREVIEW)
          .map((item) => {
            return (
              <CollectionItem key={item.id} {...item} />
            );
          })
        }
      </div>
    </div>
  );
};

export default memo(CollectionPreview);