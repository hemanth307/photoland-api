import React, { useContext } from 'react';
// icons
import { IoClose } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, setIsOpen } = useContext(CartContext);
  return (
    <div className='w-full h-full text-primary'>
      <div
        onClick={() => setIsOpen(false)}
        className='text-4xl h-[98px] flex justify-start items-center pl-4 cursor-pointer'
      >
        <IoClose />
      </div>
      <div>
        {cart.map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <div className='w-24 h-24'>
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
