import React from 'react';
import logoSvg from '../../assets/svgs/morent-logo.svg';

function Footer() {
  return (
    <footer className='lg:bg-white lg:pt-16'>
    <div className='container'>
      <div className='flex gap-10 flex-wrap lg:border-b lg:border-slate-200 lg:pb-12'>
        <div className='flex-auto pb-9 basis-full lg:basis-auto'>
          <div className='w-5/6 lg:w-[70%]'>
            <div className='pb-4'>
              <img src={logoSvg} alt="logo" />
            </div>
            <p className='text-slate-500 font-medium text-xs capitalize'>
              Our vision is to provide convenience and help increase your business.
            </p>
          </div>
        </div>
        <div className='flex-auto'>
          <h3 className='text-deepblack text-lg font-bold pb-4'>About</h3>
          <ul>
            <li className='text-slate-400 text-sm pb-3'>How it works</li>
            <li className='text-slate-400 text-sm pb-3'>Featured</li>
            <li className='text-slate-400 text-sm pb-3'>Partnership</li>
            <li className='text-slate-400 text-sm pb-3'>Business Relation</li>
          </ul>
        </div>
        <div className='flex-auto'>
          <h3 className='text-deepblack text-lg font-bold pb-4'>Community</h3>
          <ul>
            <li className='text-slate-400 text-sm pb-3'>Events</li>
            <li className='text-slate-400 text-sm pb-3'>Blog</li>
            <li className='text-slate-400 text-sm pb-3'>Podcast</li>
            <li className='text-slate-400 text-sm pb-3'>Invite a friend</li>
          </ul>
        </div>
        <div className='flex-auto'>
          <h3 className='text-deepblack text-lg font-bold pb-4'>Socials</h3>
          <ul>
            <li className='text-slate-400 text-sm pb-3'>Instagram</li>
            <li className='text-slate-400 text-sm pb-3'>Twitter</li>
            <li className='text-slate-400 text-sm pb-3'>Facebook</li>
          </ul>
        </div>
      </div>
      <div className='pt-12 pb-8 flex justify-between'>
        <span className='inline-block'>
          <a className='text-deepblack font-medium text-xs' href="#">privacy policy</a>
        </span>
        <span className='inline-block'>
          <a className='text-deepblack font-medium text-xs' href="#">terms & condition</a>
        </span>
      </div>
      <div className='mb-6'>
        <p className='text-deepblack font-medium text-xs'>©2022 MORENT. All rights reserved</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer;