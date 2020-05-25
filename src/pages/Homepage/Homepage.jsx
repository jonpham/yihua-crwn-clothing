import React from 'react';

import MenuItem from '../../components/MenuItem';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title="HATS" />
        <MenuItem title="JACKETS" />
        <MenuItem title="SNEAKERS" />
        <MenuItem title="MENS" />
        <MenuItem title="WOMENS" />
      </div>
    </div>
  );
};

export default Homepage;