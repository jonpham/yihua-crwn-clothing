import React from 'react';

import CategoryDirectory from '../../components/category-directory';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <CategoryDirectory />
    </div>
  );
};

export default Homepage;