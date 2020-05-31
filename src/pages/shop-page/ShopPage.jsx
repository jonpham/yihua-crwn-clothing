import React, {memo } from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../../pages/collection-page';

import './ShopPage.scss';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact={true} path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);


export default memo(ShopPage);
