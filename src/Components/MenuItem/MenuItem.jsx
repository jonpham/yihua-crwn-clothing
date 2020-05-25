import React, { memo } from "react";

import './MenuItem.scss';

const MenuItem = ({ imageUrl, title, size = 'md', subtitle = "Shop now"}) => (
  <div className={`${size} menu-item`}>
    <div className="item-background" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className="item-content">
      <h1 className="item-title">{title.toUpperCase()}</h1>
      <span className="item-subtitle">{subtitle}</span>
    </div>
  </div>
);

export default memo(MenuItem);
