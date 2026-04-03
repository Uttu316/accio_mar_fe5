import { createContext, useCallback, useState } from "react";

//step 1:
export const CartContext = createContext({});

//Step 2
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  const addToCart = useCallback(
    (product) => {
      setCart((curr) => [...cart, product]);
    },
    [cart],
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCart((curr) => curr.filter((i) => i.id !== productId));
    },
    [cart],
  );

  const isInCart = useCallback(
    (id) => {
      return Boolean(cart.find((i) => i.id === id));
    },
    [cart],
  );
  return (
    <CartContext
      value={{
        cart,
        cartLength,
        addToCart,
        removeFromCart,
        isInCart,
      }}
    >
      {props.children}
    </CartContext>
  );
};

export default CartProvider;
