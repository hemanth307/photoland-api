import React, { useContext, useEffect, useState } from 'react';
// context
import { CartContext } from '../context/CartContext';

const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);

  return (
    <div className='flex gap-x-6 text-primary items-center'>
      {item.amount < 10 ? (
        <select
          value={item.amount}
          onChange={(e) => handleSelect(e, item.id)}
          className='p-2 rounded-lg w-[100px] h-12 outline-none text-primary'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10+</option>
        </select>
      ) : (
        <input
          // value={item.amount}
          // onChange={(e) => handleInput(e, item.id)}
          onBlur={(e) => handleInput(e, item.id)}
          placeholder={`${item.amount}`}
          className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent'
        />
      )}
      <div className='text-accent text-[24px]'>
        ${item.attributes.price * item.amount}
      </div>
    </div>
  );
};

export default Qty;
