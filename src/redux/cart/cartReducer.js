import { CartActions } from './cartActions';

const CART_INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state=CART_INITIAL_STATE, action) => {
  switch(action.type) {
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