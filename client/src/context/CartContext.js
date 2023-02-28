import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);

  // update cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // add to cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);
    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === itemID) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // increase amount
  const increaseAmount = (item, id) => {
    const itemId = parseInt(id);
    const foundItem = cart.find((item) => {
      return item.id === itemId;
    });
    if (foundItem) {
      addToCart(foundItem, itemId);
    } else {
      addToCart(item, itemId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        addToCart,
        removeFromCart,
        itemAmount,
        increaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
