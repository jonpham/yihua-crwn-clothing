import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import './CollectionDirectory.scss';

const CategoryDirectory = ({ sections = [] }) => {
  console.log (JSON.stringify(sections));

  return (
    <div className='collection-directory-menu'>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(memo(CategoryDirectory));
