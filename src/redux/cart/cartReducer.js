import { CartActions } from './cartActions';
import { addItem, decrementItemQuantity, removeItem } from './cartUtils';

const CART_INITIAL_STATE = {
  cartItems: [],
  hidden: true
};

const cartReducer = (state=CART_INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActions.ADD_ITEM: 
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    case CartActions.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: decrementItemQuantity(state.cartItems, action.payload)
      }
    case CartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
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