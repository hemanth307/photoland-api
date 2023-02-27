import React, { useContext } from 'react';
// icons
import { IoClose } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';

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
      <div className=''>
        {cart.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <div className='w-20 h-20'>
                <img
                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                  alt=''
                />
              </div>
              <div>{item.attributes.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
