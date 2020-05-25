import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="menu-content">
            <h1 className="menu-title">HATS</h1>
            <span className="menu-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-content">
            <h1 className="menu-title">JACKETS</h1>
            <span className="menu-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-content">
            <h1 className="menu-title">SNEAKERS</h1>
            <span className="menu-subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-content">
            <h1 className="menu-title">PANTS</h1>
            <span className="menu-subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;