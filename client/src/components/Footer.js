import React from 'react';

const Footer = () => {
  return (
    <footer className='py-24 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
            Subscribe to our newsletter
          </h2>
          <p className='text-white/70'>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
        </div>
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input
            type='text'
            placeholder='Your email address'
            className='input w-full'
          />
          <button className='btn btn-accent min-w-[150px]'>Join</button>
        </form>
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto'>
          <a href='#'>Returns policy</a>
          <a href='#'>Track your order</a>
          <a href='#'>Shipping & Delivery</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
