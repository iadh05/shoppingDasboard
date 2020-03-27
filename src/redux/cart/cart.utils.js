export function AddItemToCart(cartItems, cartItemToAdd) {
  const checkItemIsExist = cartItems.some(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (checkItemIsExist) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
export function deleteItemFromCart(cartItems, cartItemToRemove) {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}
export function removeItemFromCart(cartItems, cartItemToRemove) {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingItem.quantity === 1) {
    return deleteItemFromCart(cartItems, cartItemToRemove);
  }
  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
}
