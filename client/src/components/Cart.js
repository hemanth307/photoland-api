import React, { useContext } from 'react';
// components
import CartItem from './CartItem';
// context
import { CartContext } from '../context/CartContext';
// icons
import { IoClose } from 'react-icons/io5';

const Cart = () => {
  const { cart, setIsOpen } = useContext(CartContext);
  return (
    <div className='w-full h-full px-4 text-white'>
      <div
        onClick={() => setIsOpen(false)}
        className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
      >
        <IoClose />
      </div>
      <div className='flex flex-col gap-y-6'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
