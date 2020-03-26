export function AddItemToCart(cartItems, cartItemToAdd) {
  const checkItemIsExist = cartItems.some(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  console.log('checkItemIsExist :', checkItemIsExist);
  if (checkItemIsExist) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
