import addImage from '../assets/imgs/Ads.jpg';

function HomePage() {
  return (
    <>
    <nav className="container bg-white">
      <div className="flex flex-col py-8">
        {/* logo and avatar */}
        <div className="flex justify-between">
          <a href="#">
            {logoSvg}
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
    </>
  )
}

const logoSvg = <svg width="103" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.728 19V1.12h3.12l6.696 9.096H9.056l6.552-9.096h3.12V19H15.44V4.84l1.272.312L9.92 14.2h-.384L2.912 5.152l1.08-.312V19H.728Zm30.2299.288c-1.312 0-2.536-.232-3.672-.696-1.136-.464-2.128-1.112-2.976-1.944-.848-.832-1.512-1.808-1.992-2.928-.464-1.136-.696-2.36-.696-3.672 0-1.328.232-2.552.696-3.672.464-1.12 1.12-2.096 1.968-2.928.848-.832 1.84-1.472 2.976-1.92 1.136-.464 2.368-.696 3.696-.696 1.328 0 2.56.232 3.696.696 1.136.464 2.128 1.112 2.976 1.944.848.816 1.504 1.784 1.968 2.904.48 1.12.72 2.344.72 3.672 0 1.312-.24 2.536-.72 3.672-.48 1.12-1.144 2.096-1.992 2.928-.848.832-1.84 1.48-2.976 1.944-1.12.464-2.344.696-3.672.696Zm0-2.976c.88 0 1.688-.152 2.424-.456.736-.32 1.376-.76 1.92-1.32.56-.56.984-1.224 1.272-1.992.304-.768.456-1.6.456-2.496 0-.896-.152-1.72-.456-2.472-.288-.768-.712-1.432-1.272-1.992-.544-.576-1.184-1.016-1.92-1.32-.736-.304-1.544-.456-2.424-.456-.864 0-1.664.152-2.4.456-.736.304-1.384.744-1.944 1.32-.544.56-.968 1.224-1.272 1.992-.304.752-.456 1.576-.456 2.472 0 .896.152 1.728.456 2.496.304.768.728 1.432 1.272 1.992.56.56 1.208 1 1.944 1.32.736.304 1.536.456 2.4.456ZM43.2202 19V1.12h6.648c1.216 0 2.288.224 3.216.672.944.432 1.68 1.072 2.208 1.92.528.832.792 1.848.792 3.048 0 1.232-.296 2.28-.888 3.144-.576.864-1.36 1.504-2.352 1.92L56.9482 19h-3.696l-4.392-7.848 2.112 1.248h-4.488V19h-3.264Zm3.264-9.48h3.432c.592 0 1.104-.112 1.536-.336.432-.24.768-.568 1.008-.984.24-.416.36-.896.36-1.44 0-.56-.12-1.04-.36-1.44-.24-.416-.576-.736-1.008-.96-.432-.24-.944-.36-1.536-.36h-3.432v5.52ZM59.0874 19V1.12h11.88V4h-8.616v4.584h8.136v2.88h-8.136v4.656h8.616V19h-11.88Zm14.2734 0V1.12h2.544l9.84 13.248-1.32.264V1.12h3.264V19h-2.568l-9.696-13.344 1.2-.264V19h-3.264Zm20.9571 0V4h-4.632V1.12h12.4801V4h-4.5601v15h-3.288Z" fill="#3563E9"/></svg>;

export default HomePage