import React, { memo } from "react";

import './MenuItem.scss';

const MenuItem = ({ title, subtitle = "Shop now"}) => (
  <div className="menu-item">
    <div className="item-content">
      <h1 className="item-title">{title}</h1>
      <span className="item-subtitle">{subtitle}</span>
    </div>
  </div>
);

export default memo(MenuItem);
