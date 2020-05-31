import { createSelector } from 'reselect';

export const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsArray = createSelector([selectShopCollections], (collections) => Object.values(collections) );

export const selectCollection = collectionUrlParam => {
  return createSelector([selectShopCollections], (collections) => collections[collectionUrlParam])
}