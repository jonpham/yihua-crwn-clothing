export const UserActions = {
  CLEAR_CURRENT_USER: 'CLEAR_CURRENT_USER',
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const clearCurrentUser = () => {
  return {
    type: UserActions.CLEAR_CURRENT_USER
  }
}

export const setCurrentUser = (user) => {
  return {
    type: UserActions.SET_CURRENT_USER,
    payload: {
      ...user
    }
  }
};
