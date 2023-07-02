import React from 'react';
// icons
import { FaShippingFast, FaHeadphones, FaGift } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

const Benefits = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-[30px] gap-y-8 mb-16 xl:flex-row xl:justify-between'>
          {/* benefit 1 */}
          <div className='flex-1 flex items-center gap-x-4 w-full max-w-[292px]'>
            <div className='text-[45px] text-accent'>
              <FaShippingFast />
            </div>
            <div>
              <div className='uppercase text-[15px] font-semibold mb-1'>
                Fast and Free Delivery
              </div>
              <div className='text-sm font-light text-white/80'>
                Free delivery for all orders
              </div>
            </div>
          </div>
          {/* benefit 2 */}
          <div className='flex-1 flex items-center gap-x-4 w-full max-w-[292px]'>
            <div className='text-[45px] text-accent'>
              <FaHeadphones />
            </div>
            <div>
              <div className='uppercase text-[15px] font-semibold mb-1'>
                24/7 Customer Support
              </div>
              <div className='text-sm font-light text-white/80'>
                Friendly 24/7 customer support
              </div>
            </div>
          </div>
          {/* benefit 3 */}
          <div className='flex-1 flex items-center gap-x-4 w-full max-w-[292px]'>
            <div className='text-[45px] text-accent'>
              <BsShieldFillCheck />
            </div>
            <div>
              <div className='uppercase text-[15px] font-semibold mb-1'>
                Money Back Guarantee
              </div>
              <div className='text-sm font-light text-white/80'>
                We return money within 30 days
              </div>
            </div>
          </div>
          {/* benefit 4*/}
          <div className='flex-1 flex items-center gap-x-4 w-full max-w-[292px]'>
            <div className='text-[45px] text-accent'>
              <FaGift />
            </div>
            <div>
              <div className='uppercase text-[15px] font-semibold mb-1'>
                Member Gifts
              </div>
              <div className='text-sm font-light text-white/80'>
                Discount coupons weekends.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
