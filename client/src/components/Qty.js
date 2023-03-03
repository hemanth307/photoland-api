import React, { useContext, useState } from 'react';
// context
import { CartContext } from '../context/CartContext';

const Qty = ({ item }) => {
  const { handleInput, handleSelect, handleBlur } = useContext(CartContext);
  const [inputVal, setInputVal] = useState(1);
  return (
    <div className='flex gap-x-3 text-primary'>
      {item.amount < 10 ? (
        <select
          value={item.amount}
          onChange={(e) => handleSelect(e, item.id)}
          className='p-2 rounded-lg w-[100px] outline-none text-primary'
        >
          {/* <option value='0'>0 - delete</option> */}
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
          onBlur={(e) => handleInput(e, item.id)}
          className='text-primary'
        />
      )}
    </div>
  );
};

export default Qty;
