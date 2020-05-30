export const addItem = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map(item => (item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item));
  }
  
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  return [...cartItems].filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const decrementItemQuantity = (cartItems, itemToDecrement) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToDecrement.id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToDecrement.id);
  }

  return cartItems.map((item) =>
    item.id === itemToDecrement.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
