import { UserActions } from './userActions';

const INITIAL_USER_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch(action.type) {
    case UserActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case UserActions.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: INITIAL_USER_STATE.currentUser
      }
    default:
      return state;
  }
}

export default userReducer;