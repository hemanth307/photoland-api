import React, { useContext } from 'react';
// icons
import { IoTrashOutline, IoClose } from 'react-icons/io5';
// components
import Qty from './Qty';
// context
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='flex gap-x-8'>
      <div className='w-[70px] h-[70px]'>
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt=''
        />
      </div>
      <div className='flex-1'>
        {/* title & delete icon */}
        <div className='flex gap-x-4 mb-3'>
          <div className=''>{item.attributes.title}</div>
          <div
            onClick={() => removeFromCart(item.id)}
            className='cursor-pointer text-[24px] text-accent hover:text-red-600 transition-all'
          >
            <IoClose />
          </div>
        </div>
        <div className='flex items-center gap-x-12'>
          {/* quantity */}
          <div className='flex gap-x-4 mb-2'>
            <Qty item={item} />
          </div>
          <div className='text-accent text-xl'>
            $ {item.attributes.price * item.amount}
          </div>
        </div>
        {/* prices */}
        <div>
          <span className='text-accent'>$ {item.attributes.price}</span> per
          piece
        </div>
      </div>
    </div>
  );
};

export default CartItem;
