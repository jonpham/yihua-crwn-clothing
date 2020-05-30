import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import userReducer from './user/userReducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: [ 'cart' ]
}

const rootReducer = combineReducers({
  cart: cartReducer,
  directory: directoryReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);