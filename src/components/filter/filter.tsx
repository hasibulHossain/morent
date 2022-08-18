import React, {useContext} from 'react'
import classNames from 'classnames'
import { AppContext } from '../../App'

function Filter() {
  const state = useContext(AppContext);

  const classes = classNames('flex flex-col md:flex-row xl:flex-row', {
    'lg:flex-col': state.isFilterOpen,
    'lg:flex-row': !state.isFilterOpen,
  });

  const filterInterchangeClasses = classNames('p-4 bg-primaryblue drop-shadow text-white grow-0 self-center rounded-lg z-10 -my-3 md:-mx-2', {
    'lg:-my-4 xl:-mx-2': state.isFilterOpen,
    'lg:my-0 lg:mx-11': !state.isFilterOpen,
  })

  return (      <div className={classes}>
  {/* pick-up filter */}
  <div className='bg-white p-4 drop-shadow rounded-lg lg:flex-auto'>
    <div className='mb-6'>
      <span className='inline-block w-2 h-2 mr-3 bg-primaryblue ring-4 ring-opacity-30 ring-primaryblue rounded-full'></span>
      <span className='text-base font-medium text-deepblack'>Pick - Up</span>
    </div>
    <div className='flex divide-x'>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Locations</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          Semarang
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Date</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          20 Jul 2022
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Time</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          07:00
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
    </div>
  </div>
  <div className={filterInterchangeClasses}>
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.1605 3.8358v13.6178M3.0827 7.9319l4.0778-4.0967 4.0778 4.0967M17.0887 20.1671V6.5493M21.1665 16.071l-4.0778 4.0967-4.0778-4.0967" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
  {/* Drop-off filter */}
  <div className='bg-white p-4 drop-shadow rounded-lg lg:flex-auto'>
    <div className='mb-6'>
      <span className='inline-block w-2 h-2 mr-3 bg-primaryblue ring-4 ring-opacity-30 ring-primaryblue rounded-full'></span>
      <span className='text-base font-medium text-deepblack'>Pick - Up</span>
    </div>
    <div className='flex divide-x'>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Locations</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          Semarang
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Date</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          20 Jul 2022
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
      <div className='flex-auto px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Time</p>
        <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
          07:00
          <span className='inline-block ml-1'>
          <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
          </span>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Filter