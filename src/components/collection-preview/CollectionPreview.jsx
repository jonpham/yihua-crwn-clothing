import React, { memo } from 'react';

const MAX_ITEM_PREVIEW = 4;

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="CollectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < MAX_ITEM_PREVIEW)
          .map((item) => {
            return (
              <div key={item.id}>
                {item.name}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default memo(CollectionPreview);