export const CartActions = {
  ADD_ITEM: "ADD_ITEM",
  DECREMENT_ITEM: "DECREMENT_ITEM",
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
  REMOVE_ITEM: "REMOVE_ITEM"
};

export const addItemToCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item
});

export const decrementItemCartQuantity = (item) => ({
  type: CartActions.DECREMENT_ITEM,
  payload: item
})

export const removeItemFromCart = (item) => ({
  type: CartActions.REMOVE_ITEM,
  payload: item
})

export const toggleCart = () => ({
  type: CartActions.TOGGLE_CART_VISIBILITY,
});
