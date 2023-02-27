import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newItem = item[0];
    setCart([...cart, newItem]);
  };
  console.log(cart);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
