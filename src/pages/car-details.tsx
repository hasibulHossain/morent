import React from 'react'
import Navbar from '../components/navbar/navbar';
import detailsCar from '../assets/imgs/details-car-sm.jpg';
import detailsCarLg from '../assets/imgs/ads-2-lg.jpg';
import Button from '../components/button/button';
import TextButton from '../components/button/text-button';
import SectionTitle from '../components/section-title/section-title';
import ProductCard from '../components/product-card/product-card';
import Footer from '../components/footer/footer';

function CarDetails() {
  return (
    <>
        <Navbar />
        <div className='pt-8'>
            <div className='container flex flex-col gap-8 lg:flex-row'>
                {/* left */}
                <div className='basis-1/2'>
                    <div className="flex flex-col gap-6">
                      <div className='basis-full'>
                        <img className='aspect-[3.27/2.32] w-full' src={detailsCar} srcSet={`${detailsCar} 300w, ${detailsCarLg} 768w, ${detailsCarLg} 1280w`} alt="details-car" />
                      </div>
                      <div className='basis-full flex gap-4'>
                        <div className='flex-none basis-24 p-1 border-2 border-primaryblue rounded-lg'>
                          <img className='aspect-[9.6/6.4] w-full' src={detailsCar} alt="" />
                        </div>
                        <div className='flex-none basis-24 p-1 rounded-lg'>
                          <img className='aspect-[9.6/6.4] w-full' src={detailsCar} alt="" />
                        </div>
                        <div className='flex-none basis-24 p-1 rounded-lg'>
                          <img className='aspect-[9.6/6.4] w-full' src={detailsCar} alt="" />
                        </div>
                      </div>
                    </div>
                </div>
                {/* right */}
                <div className='basis-1/2 flex flex-col justify-between p-4 rounded-lg drop-shadow bg-white md:p-7'> 
                  <div>
                    <div className='flex items-start justify-between pb-4 md:pb-8'>
                      <div>
                        <h1 className='text-xl font-bold text-deepblack md:text-3xl'>Nissan GT - R</h1>
                        <div>
                          <span className="star"></span>
                          <span className='text-xs text-deepblack font-medium md:text-sm'>440+ Reviewer</span>
                        </div>
                      </div>
                      <div className='text-red-500'>
                        {
                          loveIcon
                        }
                      </div>
                    </div>
                    <p className='text-xs leading-6 text-deepblack mb-4 md:text-base md:mb-8'>
                    NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                    </p>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs md:text-base mb-8">
                      <div className='flex justify-between font-medium text-deepblack'>
                        <span className='inline-block text-slate-400'>Type car</span>
                        <span className='inline-block'>Sport</span>
                      </div>
                      <div className='flex justify-between font-medium text-deepblack'>
                        <span className='inline-block text-slate-400'>Capacity</span>
                        <span className='inline-block'>2 person</span>
                      </div>
                      <div className='flex justify-between font-medium text-deepblack'>
                        <span className='inline-block text-slate-400'>Steering</span>
                        <span className='inline-block'>Manual</span>
                      </div>
                      <div className='flex justify-between font-medium text-deepblack'>
                        <span className='inline-block text-slate-400'>Gasoline</span>
                        <span className='inline-block'>70L</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                  <div>
                    <div>
                      <span className='text-base text-deepblack font-bold lg:text-2xl'>$99.00/ </span>
                      <span className='text-xs text-slate-400 lg:text-base'>day</span>
                    </div>
                    <div>
                      <span className='text-xs text-slate-400 line-through font-medium'>$90.00</span>
                    </div>
                  </div>
                  <Button onClick={() => {}}>
                    rent now
                  </Button>
                  </div>
                </div>
            </div>
            <div className="container">
              <div className='bg-white p-4 drop-shadow mt-8 rounded-lg md:p-6 lg:mt-10'>
                <div className='mb-6'>
                  <span className='inline-block text-deepblack text-xl font-bold mr-3'>Reviews</span>
                  <span className='px-3 py-[6px] text-sm font-medium text-white bg-primaryblue rounded'>13</span>
                </div>
                {/* reviews */}
                <div>
                {/* review card */}
                  <div className="flex gap-2 pb-5">
                    <div className='w-11 h-11 bg-slate-300 flex-none rounded-full'>
                    </div>
                    <div className='flex-auto'>
                      <div className='flex justify-between pb-4'>
                        <div>
                          <span className='block pb-2 text-base text-deepblack font-medium'>Alex Santon</span>
                          <span className='block text-xs text-slate-400'>CEO @t Bukalupak</span>
                        </div>
                        <div>
                          <span className='block text-xs pb-2'>21 July 2022</span>
                          <span className='block text-xs text-slate-400'>Star</span>
                        </div>
                      </div>
                      <p className='text-xs text-deepblack leading-6 md:text-sm'>
                      We are very happy with the service from the MORENT App. Morent has a low price . . . 
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-5">
                    <div className='w-11 h-11 bg-slate-300 flex-none rounded-full'>
                    </div>
                    <div className='flex-auto'>
                      <div className='flex justify-between pb-4'>
                        <div>
                          <span className='block pb-2 text-base text-deepblack font-medium'>Alex Santon</span>
                          <span className='block text-xs text-slate-400'>CEO @t Bukalupak</span>
                        </div>
                        <div>
                          <span className='block text-xs pb-2'>21 July 2022</span>
                          <span className='block text-xs text-slate-400'>Star</span>
                        </div>
                      </div>
                      <p className='text-xs text-deepblack leading-6 md:text-sm'>
                      We are very happy with the service from the MORENT App. Morent has a low price . . . 
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <TextButton onClick={() => {}} classes="md:text-sm" textColor="text-slate-400">
                    <div className='flex items-center'>
                      <span className='inline-block mr-2'>Show All</span>
                      <span className='inline-block'>{arrowDown}</span>
                    </div>
                  </TextButton>
                </div>
              </div>
            </div>

            {/* popular car slider */}
            <div className='container'>
            {/* title */}
            <SectionTitle title='Popular car' />

              <div className='overflow-hidden flex gap-5 p-[1px] -mr-4 sm:overflow-auto sm:mr-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-4'>
                {/* car card */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            {/* title */}
            <SectionTitle title='Popular car' />

            {/* popular car slider */}
              <div className='overflow-hidden flex gap-5 p-[1px] -mr-4 sm:overflow-auto sm:mr-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-4'>
                {/* car card */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
        </div>
        <div className='mt-12'></div>
        <Footer />
    </>
  )
};

const loveIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23C10.99 3.98 9.37 3.1 7.56 3.1 4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z" fill="currentcolor"/></svg>;

const arrowDown =           <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="currentcolor" stroke="currentcolor" strokeWidth=".5"/></svg>;

export default CarDetails;