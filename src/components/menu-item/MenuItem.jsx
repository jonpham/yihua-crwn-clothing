import React, { memo } from "react";
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ imageUrl, history, key, linkPath, match, title, size = 'md', subtitle = "Shop now"}) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkPath}`)}>
    <div className="item-background" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
    <div className="item-content">
      <h1 className="item-title">{title.toUpperCase()}</h1>
      <span className="item-subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(memo(MenuItem));
