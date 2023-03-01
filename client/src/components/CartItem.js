import React from 'react';
// icons
import { IoTrashOutline } from 'react-icons/io5';
// components
import QtySelect from './QtySelect';

const CartItem = ({ item }) => {
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
          <div className='cursor-pointer'>
            <IoTrashOutline />
          </div>
        </div>
        {/* quantity  */}
        <div className='flex gap-x-4'>
          <QtySelect item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
