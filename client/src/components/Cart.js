import React, { useContext } from 'react';
// components
import CartItem from './CartItem';
// context
import { CartContext } from '../context/CartContext';
// icons
import { IoClose, IoBasket } from 'react-icons/io5';

const Cart = () => {
  const { cart, setIsOpen, clearCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className='w-full h-full px-4 text-white'>
      <div className='overflow-y-scroll h-[99vh]'>
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
        {cart.length >= 1 ? (
          <button
            onClick={() => clearCart()}
            className='btn bg-accent text-primary mt-12 ml-[84px]'
          >
            clear cart
          </button>
        ) : (
          <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30'>
            <div className='text-2xl'>Your cart is empty</div>
            <div className='text-6xl'>
              <IoBasket />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
