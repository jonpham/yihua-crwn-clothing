import initialShopData from '../../redux/shop/__fixtures__/shopData';

const INITIAL_SHOP_DATA = {
  collections: { ...initialShopData }
};

const shopReducer = (state = INITIAL_SHOP_DATA, action) => {
  switch(action.type){
    default: 
      return state;
  }
}

export default shopReducer;