import React, {useState, useContext} from 'react'
import Filter from '../components/filter/filter'
import Navbar from '../components/navbar/navbar'
import ProductCard from '../components/product-card/product-card'
import classNames from 'classnames';
import { AppContext } from '../App';
import Footer from '../components/footer/footer';
import Button from '../components/button/button';

function AllCars() {
    const state = useContext(AppContext);

    const classes = classNames('pt-8 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-8', {
        'lg:grid-cols-2 xl:grid-cols-3': state.isFilterOpen,
        'lg:grid-cols-3 xl:grid-cols-4': !state.isFilterOpen,
    });

  return (
    <>
        <main>
            <Navbar />
            <div className='container flex gap-8'>
                {
                    state.isFilterOpen && (
                        <div className='hidden flex-none lg:block w-80 bg-white p-8' onClick={() => state.setIsFilterOpen(false)}>
                            <div className='pb-10'>
                                <span className='block mb-7 uppercase text-slate-400 tracking-wider'>type</span>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>Sport </span>
                                        <span className='text-slate-400'> (12)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>suv </span>
                                        <span className='text-slate-400'> (10)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>mpv </span>
                                        <span className='text-slate-400'> (16)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>sedan </span>
                                        <span className='text-slate-400'> (20)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>coupe </span>
                                        <span className='text-slate-400'> (20)</span>
                                    </div>
                                </label>
                            </div>
                            <div className='pb-10'>
                                <span className='block mb-7 uppercase text-slate-400 tracking-wider'>type</span>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>Sport </span>
                                        <span className='text-slate-400'> (12)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>Sport </span>
                                        <span className='text-slate-400'> (12)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>Sport </span>
                                        <span className='text-slate-400'> (12)</span>
                                    </div>
                                </label>
                                <label className='flex items-center mb-6'>
                                    <input type="checkbox" className="form-checkbox rounded text-primaryblue mr-3 border-slate-400 focus:ring-0" />
                                    <div>
                                        <span className='text-xl text-navy font-medium'>Sport </span>
                                        <span className='text-slate-400'> (12)</span>
                                    </div>
                                </label>
                            </div>
                            <div className='pb-10'>
                                <span className='block mb-7 uppercase text-slate-400 tracking-wider'>type</span>
                                <input id="minmax-range" type="range" defaultValue={20} className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700" />
                                <span className='inline-block text-deepblack text-xl font-medium mt-3'>Max. $100.00</span>
                            </div>
                        </div>
                    )
                }
                <div className='flex-auto pt-8'>
                    <Filter />
                    <div className={classes} onClick={() => state.setIsFilterOpen(true)}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className='container py-12'>
                        <div className='flex justify-end'>
                        <div className='w-2/3 sm:w-[55%] flex justify-between items-center'>
                            <Button onClick={() => {}}>
                            show more car
                            </Button>
                            <span className='inline-block text-slate-500 font-medium text-sm capitalize'>120 car</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
        <Footer />
    </>
  )
}

export default AllCars