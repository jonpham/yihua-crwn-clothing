export const addItem = (cartItems, newItem) => {
  const existingCartItemIdx = cartItems.findIndex((cartItem) => cartItem.id === newItem.id);

  if (existingCartItemIdx !== -1) {
    const newCart = [ ...cartItems ];
    newCart[existingCartItemIdx].quantity += 1 

    return newCart;
  }
  
  return [
    ...cartItems, { ...newItem, quantity: 1 } 
  ];
}

export const removeItem = (cartItems, itemIdToRemove) => {
  return [...cartItems].filter((cartItem) => cartItem.id !== itemIdToRemove);
}