import React from 'react'
import logoSvg from '../../assets/svgs/morent-logo.svg';
import Tooltip from '../tooltip/tooltip';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white lg:border-b lg:border-slate-200">
    <div className='container'>
      <div className="flex py-8 lg:items-center lg:gap-10">
        {/* logo and avatar */}
        <div className="flex flex-auto flex-wrap justify-between lg:justify-start lg:items-center lg:flex-nowrap">
          <div className='lg:hidden'>
            {hamburgerMenu}
          </div>
          <div className='pt-8 order-3 basis-full lg:pt-0 lg:mr-16 lg:basis-auto'>
            <div className='w-28 lg:w-36'>
              <Link to='/' className='inline-block w-full'>
                <img className='w-full' src={logoSvg} alt="logo" />
              </Link>
            </div>
          </div>
          {/* search and filter */}
          <div className="flex order-last basis-full mt-8 lg:m-0 lg:basis-3/5">
            <div className="flex grow items-center py-3 px-6 border border-slate-200 text-slate-700 rounded-lg lg:rounded-full">
              {searchIcon}
              <input type="text" className='w-full border-none outline-none px-5' placeholder='Search something here' />
              {/* <span className="w-fit text-sm pl-6">
                Search something here
              </span> */}
            </div>
            <div className="group relative flex-none items-center p-3 ml-3 border border-slate-200 rounded-lg text-slate-700 cursor-pointer lg:hidden">
              {filterIcon}
              <Tooltip>
                Filter
              </Tooltip>
            </div>
          </div>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex lg:hidden" aria-controls="navbar-default" aria-expanded="false">
            {/* avatar */}
            <div className="h-8 w-8 rounded-full bg-slate-400">
            </div>
          </button>
        </div>


        {/* nav right side on desktop:lg */}
        <div className='hidden lg:flex lg: gap-5'>
          <button data-collapse-toggle="navbar-default" type="button" className="relative group hidden text-navy lg:block lg:p-3 lg:border lg:rounded-full lg:border-slate-200 lg:hover:text-primaryblue lg:hover:bg-primaryblue/5" aria-controls="navbar-default" aria-expanded="false">
            {loveIcon}
            <Tooltip>
              Favorite
            </Tooltip>
          </button>

          <button data-collapse-toggle="navbar-default" type="button" className="relative group hidden relative text-navy lg:block lg:p-3 lg:border lg:rounded-full lg:border-slate-200 lg:hover:text-primaryblue lg:hover:bg-primaryblue/5" aria-controls="navbar-default" aria-expanded="false">
            {bellIcon}
            <span className="absolute inline-flex rounded-full h-3 w-3 top-0 right-0 bg-red-500"></span>
            <Tooltip>
              Notification
            </Tooltip>
          </button>

          <button data-collapse-toggle="navbar-default" type="button" className="relative group hidden text-navy lg:block lg:p-3 lg:border lg:rounded-full lg:border-slate-200 lg:hover:text-primaryblue lg:hover:bg-primaryblue/5" aria-controls="navbar-default" aria-expanded="false">
            {gearIcon}
            <Tooltip>
              Settings
            </Tooltip>
          </button>

          <button data-collapse-toggle="navbar-default" type="button" className="hidden lg:block" aria-controls="navbar-default" aria-expanded="false">
            {/* avatar */}
            <div className="h-11 w-11 rounded-full bg-slate-400">
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>

  )
}

const searchIcon = <svg className="inline-block" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21c5.2467 0 9.5-4.2533 9.5-9.5S16.7467 2 11.5 2 2 6.2533 2 11.5 6.2533 21 11.5 21ZM22 22l-2-2" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const filterIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.5h-6M6 6.5H2M10 10c1.933 0 3.5-1.567 3.5-3.5S11.933 3 10 3 6.5 4.567 6.5 6.5 8.067 10 10 10ZM22 17.5h-4M8 17.5H2M14 21c1.933 0 3.5-1.567 3.5-3.5S15.933 14 14 14s-3.5 1.567-3.5 3.5S12.067 21 14 21Z" stroke="currentcolor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const bellIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.3399 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82c0-2.35-1.38-4.38-3.37-5.33-.52-.92-1.48-1.49-2.58-1.49-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.8299 20.01c-.42 1.16-1.53 1.99-2.83 1.99-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06.16-.02.32-.04.49-.06Z" fill="currentcolor"/></svg>;

const gearIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1 9.22c-1.81 0-2.55-1.28-1.65-2.85.52-.91.21-2.07-.7-2.59l-1.73-.99c-.79-.47-1.81-.19-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19c-.45-.79-1.47-1.07-2.26-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.8501-1.9 1.9001v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85-.52.91-.21 2.07.7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76c-.01-1.04-.86-1.9-1.91-1.9ZM12 15.2502c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z" fill="currentcolor"/></svg>;

const loveIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23C10.99 3.98 9.37 3.1 7.56 3.1 4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z" fill="currentcolor"/></svg>;

const hamburgerMenu = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="#3D5278" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 12H21" stroke="#3D5278" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 17H21" stroke="#3D5278" strokeWidth="1.5" strokeLinecap="round"/>
</svg>;

export default Navbar