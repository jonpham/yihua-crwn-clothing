export const CartActions = {
  ADD_ITEM: "ADD_ITEM",
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY"
};

export const addItemToCart = (itemId) => ({
  type: CartActions.ADD_ITEM,
  payload: itemId
});

export const toggleCart = () => ({
  type: CartActions.TOGGLE_CART_VISIBILITY,
});
