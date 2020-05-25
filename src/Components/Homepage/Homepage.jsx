import React from 'react';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="item-content">
            <h1 className="item-title">HATS</h1>
            <span className="item-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="item-content">
            <h1 className="item-title">JACKETS</h1>
            <span className="item-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="item-content">
            <h1 className="item-title">SNEAKERS</h1>
            <span className="item-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="item-content">
            <h1 className="item-title">PANTS</h1>
            <span className="item-subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;