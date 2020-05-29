export const CartActions = {
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY"
};

export const toggleCart = () => ({
  type: CartActions.TOGGLE_CART_VISIBILITY,
});
