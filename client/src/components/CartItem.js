import React, { useContext } from 'react';
// icons
import { IoTrashOutline } from 'react-icons/io5';
// components
import Qty from './Qty';
// context
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='flex gap-x-4'>
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
        {/* quantity  */}
        <div className='flex gap-x-4'>
          <Qty item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
