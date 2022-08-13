import addImage from '../assets/imgs/Ads.jpg';
import logoSvg from '../assets/svgs/morent-logo.svg';

function HomePage() {
  return (
    <>
    <nav className="container bg-white">
      <div className="flex flex-col py-8">
        {/* logo and avatar */}
        <div className="flex justify-between">
          <a href="#">
            <img src={logoSvg} alt="logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <div className="h-8 w-8 rounded-full bg-slate-400">
            </div>
          </button>
        </div>
        {/* search and filter */}
        <div className="flex mt-8">
          <div className="flex grow items-center py-3 px-6 border border-slate-200 text-slate-700 rounded-lg">
            <svg className="inline-block" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21c5.2467 0 9.5-4.2533 9.5-9.5S16.7467 2 11.5 2 2 6.2533 2 11.5 6.2533 21 11.5 21ZM22 22l-2-2" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span className="text-sm pl-2">
              Search something here
            </span>
          </div>
          <div className="flex-none items-center p-3 ml-3 border border-slate-200 rounded-lg text-slate-700">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 6.5h-6M6 6.5H2M10 10c1.933 0 3.5-1.567 3.5-3.5S11.933 3 10 3 6.5 4.567 6.5 6.5 8.067 10 10 10ZM22 17.5h-4M8 17.5H2M14 21c1.933 0 3.5-1.567 3.5-3.5S15.933 14 14 14s-3.5 1.567-3.5 3.5S12.067 21 14 21Z" stroke="currentcolor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
    </nav>
    {/* hero section */}
    <header>
      <div className='container'>
        <div className='w-full aspect-[3.27/2.32] bg-cover bg-no-repeat rounded-lg p-4' style={{backgroundImage: `url(${addImage})`}}>
          <h1 className='text-white capitalize text-base font-medium mb-3'>The best platform for car rental</h1>
          <p className='w-4/5 mb-3.5 text-white capitalize text-xs'>
            ease of doing a car rental safely and reliably. of course not at low price.
          </p>
          <button className='capitalize text-center text-sm font-medium text-white bg-primaryblue px-7 py-3.5 rounded-md hover:bg-blue-800 focus:outline-none'>
            rental car
          </button>
        </div>
      </div>
    </header>
    <main className='pt-8'>
      {/* date filter */}
      <div className='flex flex-col container'>
        {/* pick-up filter */}
        <div className='bg-white p-4 drop-shadow rounded-lg'>
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
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
            <div className='flex-auto px-4'>
              <p className='text-base font-bold text-deepblack pb-2'>Date</p>
              <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
                20 Jul 2022
                <span className='inline-block ml-1'>
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
            <div className='flex-auto px-4'>
              <p className='text-base font-bold text-deepblack pb-2'>Time</p>
              <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
                07:00
                <span className='inline-block ml-1'>
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='p-4 bg-primaryblue text-white grow-0 self-center rounded-lg -my-4 z-10'>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.1605 3.8358v13.6178M3.0827 7.9319l4.0778-4.0967 4.0778 4.0967M17.0887 20.1671V6.5493M21.1665 16.071l-4.0778 4.0967-4.0778-4.0967" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        {/* Drop-off filter */}
        <div className='bg-white p-4 drop-shadow rounded-lg mb-8'>
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
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
            <div className='flex-auto px-4'>
              <p className='text-base font-bold text-deepblack pb-2'>Date</p>
              <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
                20 Jul 2022
                <span className='inline-block ml-1'>
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
            <div className='flex-auto px-4'>
              <p className='text-base font-bold text-deepblack pb-2'>Time</p>
              <p className='text-xs text-slate-400 flex items-center cursor-pointer'>
                07:00
                <span className='inline-block ml-1'>
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" stroke-width=".5"/></svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default HomePage