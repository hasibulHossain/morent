import React from 'react'
import detailsCar from '../assets/imgs/details-car-sm.jpg';
import TextButton from '../components/button/text-button';

function Checkout() {
  return (
    <div className='container'>
        <div className="flex flex-col gap-8 mt-8">
            <div className='p-4 drop-shadow bg-white rounded-lg'>
                <p className='text-base text-deepblack font-bold capitalize pb-1'>rental summery</p>
                <p className='text-xs text-slate-400 pb-6'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                <div className='flex items-center justify-start gap-4'>
                    <div className='flex-none w-28 rounded-lg overflow-hidden'>
                        <img className='aspect-[9.6/6.4] w-full' src={detailsCar} alt="" />
                    </div>
                    <div>
                        <span className='inline-block text-xl font-bold text-deepblack mb-1'>
                            Nissan GT - R
                        </span>
                        <p className=' text-xs'>Star</p>
                        <p className='text-navy text-xs'>440+ reviewer</p>
                    </div>
                </div>
                <div className='border-b border-slate-200 mt-6 mb-4'></div>
                <div>
                    <div className='flex flex-col gap-6 mb-6'>
                        <div className='flex justify-between'>
                            <span className='text-xs font-medium'>Subtotal</span>
                            <span className='text-base text-deepblack font-medium '>$20</span>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-xs font-medium'>Subtotal</span>
                            <span className='text-base text-deepblack font-medium '>$20</span>
                        </div>
                    </div>
                    <div className='relative mb-6'>
                        <input type="text" className='border-none w-full bg-slate-100 rounded-lg px-5 pr-24 py-3 placeholder:text-xs' placeholder='Apply promo code' />

                        <TextButton onClick={() => {}} classes='absolute right-4 top-1/2 -translate-y-1/2' padding="p-0" fontSize='text-xs' textColor='text-deepblack' >
                            Apply now
                        </TextButton>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='capitalize text-deepblack text-base font-bold pb-1'>total rental price</p>
                            <p className='text-xs text-slate-400'>overall price rental</p>
                        </div>
                        <div>
                            <span className='text-xl font-bold'>$80.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    </div>
  );
}


export default Checkout