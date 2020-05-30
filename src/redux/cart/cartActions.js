export const CartActions = {
  ADD_ITEM: "ADD_ITEM",
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
  REMOVE_ITEM: "REMOVE_ITEM"
};

export const addItemToCart = (item) => ({
  type: CartActions.ADD_ITEM,
  payload: item
});

export const removeItemFromCartById = (itemId) => ({
  type: CartActions.REMOVE_ITEM,
  payload: itemId
})

export const toggleCart = () => ({
  type: CartActions.TOGGLE_CART_VISIBILITY,
});
