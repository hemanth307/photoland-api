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
        {/* {cart.map((item) => {
          return <div key={item.id}>product</div>;
        })} */}
      </div>
    </div>
  );
};

export default Cart;
