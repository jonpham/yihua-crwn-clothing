import { CartActions } from './cartActions';
import { addItemToCart } from './cartUtils';

const CART_INITIAL_STATE = {
  cartItems: [],
  hidden: true
};

const cartReducer = (state=CART_INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActions.ADD_ITEM: 
      return {
        ...state,
        cartItems: addItemToCart( state.cartItems, action.payload)
      }
    case CartActions.TOGGLE_CART_VISIBILITY: 
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;