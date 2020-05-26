import React, { memo } from 'react';

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="CollectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item) => {
          return (
            <div key={item.id}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(CollectionPreview);