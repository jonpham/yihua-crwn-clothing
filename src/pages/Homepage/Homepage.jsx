import React from 'react';

import CategoryDirectory from '../../components/CategoryDirectory';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <CategoryDirectory />
    </div>
  );
};

export default Homepage;