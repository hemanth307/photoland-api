import React, { createContext, useEffect, useState } from 'react';

// context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [input, setInput] = useState(false);

  // update cart amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
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
          setAmount(cartItem.amount + 1);
          if (cartItem.amount >= 9) {
            setInput(true);
          }

          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  // handleChange
  // const handleChange = (e, id) => {
  //   const value = parseInt(e.target.value);
  //   const cartItem = cart.find((item) => {
  //     return item.id === id;
  //   });

  //   if (cartItem) {
  //     const newCart = [...cart].map((item) => {
  //       if (item.id === id) {
  //         setAmount(value);
  //         if (value > 9) {
  //           setInput(true);
  //         }
  //         return { ...item, amount: value };
  //       } else {
  //         return item;
  //       }
  //     });

  //     setCart(newCart);
  //   }
  // };

  // handleBlur
  // const handleBlur = (e, id) => {
  //   const value = parseInt(e.target.value);
  //   // const cartItem = cart.find((item) => {
  //   //   return item.id === id;
  //   // });
  //   // console.log(cartItem);
  // };

  // remove from cart
  // const removeFromCart = (id) => {
  //   const newCart = cart.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setCart(newCart);
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        itemsAmount,
        amount,
        addToCart,
        // removeFromCart,
        // handleChange,
        // handleBlur,
        input,
        setInput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
