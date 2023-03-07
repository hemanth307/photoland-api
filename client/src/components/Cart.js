import React, { useContext } from 'react';
// components
import CartItem from './CartItem';
// context
import { CartContext } from '../context/CartContext';
// icons
import { IoClose, IoBasket } from 'react-icons/io5';

const Cart = () => {
  const { cart, setIsOpen, clearCart, total } = useContext(CartContext);
  return (
    <div className='w-full h-full px-4 text-white'>
      <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
        <div
          onClick={() => setIsOpen(false)}
          className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
        >
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal and total */}
      <div className='px-6 py-10 flex flex-col'>
        <div className='flex justify-between text-xl mb-2'>
          <div>Subtotal</div>
          <div className='text-white'>$ {parseFloat(total)}</div>
        </div>
        <div className='flex justify-between text-2xl mb-6'>
          <div>Total</div>
          <div className='text-white'>$ {total}</div>
        </div>
        {/* clear cart button */}
        <div>
          {cart.length >= 1 ? (
            <button
              onClick={() => clearCart()}
              className='btn bg-accent hover:bg-accent-hover text-primary'
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
    </div>
  );
};

export default Cart;
