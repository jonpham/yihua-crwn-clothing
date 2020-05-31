import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../components/collection-preview";
import { selectCollectionsArray } from '../../redux/shop/shopSelectors';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArray
})

export default connect(mapStateToProps)(memo(CollectionsOverview));