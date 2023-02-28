import React, { useContext } from 'react';
// icons
import { IoClose, IoTrashOutline } from 'react-icons/io5';
import { FiMinus, FiPlus } from 'react-icons/fi';
// context
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, setIsOpen, removeFromCart } = useContext(CartContext);
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
          return (
            <div className='flex gap-x-4' key={item.id}>
              <div className='w-[70px] h-[70px]'>
                <img
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=''
                />
              </div>
              <div className='flex-1'>
                {/* title & delete icon */}
                <div className='flex gap-x-4 mb-3'>
                  <div className='text-sm'>{item.attributes.title}</div>
                  <div
                    onClick={() => removeFromCart(item.id)}
                    className='cursor-pointer'
                  >
                    <IoTrashOutline />
                  </div>
                </div>
                {/* quantity & btn */}
                <div className='flex gap-x-4'>
                  <div className='bg-white w-full max-w-[140px] h-9 rounded-lg text-primary flex justify-between items-center overflow-hidden'>
                    {/* minus */}
                    <button className='w-full h-full flex justify-center items-center border-r text-sm'>
                      <FiMinus />
                    </button>
                    {/* amount */}
                    <div className='w-36 flex justify-center items-center text-sm font-semibold'>
                      1
                    </div>
                    {/* plus */}
                    <button className='w-full h-full flex justify-center items-center border-l text-sm'>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
