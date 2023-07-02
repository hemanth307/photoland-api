import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { BsBrowserChrome } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='pt-16 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>
            Subscribe to our PHOTOLAND
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
        {/* links */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
          <a href='#' className='hover:text-white transition-all'>
            Returns policy
          </a>
          <a href='#' className='hover:text-white transition-all'>
            Track your order
          </a>
          <a href='#' className='hover:text-white transition-all'>
            Shipping & delivery
          </a>
        </div>
        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <a href='https://www.linkedin.com/in/hemanth-akula-902216221/' className='hover:text-accent transition-all' target="_blank">
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/hemanth307' className='hover:text-accent transition-all' target="_blank">
            <AiFillGithub />
          </a>
          <a href='https://www.instagram.com/hem_307/' className='hover:text-accent transition-all' target="_blank">
            <AiFillInstagram />
          </a>
          <a href='https://portfolio-pi-murex-92.vercel.app/' className='hover:text-accent transition-all' target="_blank">
            <BsBrowserChrome />
          </a>
        </div>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyright &copy; Photoland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
