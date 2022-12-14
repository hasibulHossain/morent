import { FC } from 'react';
import Button from "../button/button";
import carImg from '../../assets/imgs/car.png';
import { Link } from "react-router-dom";
import { Car } from "../../types";

interface Props {
  car: Car
}

const ProductCard:FC<Props> = ({car}) => {
  return (
    <div className="min-w-fit grow-0 shrink-0 bg-white rounded-lg p-4 drop-shadow lg:p-6">
        <div className='flex justify-between mb-8 lg:mb-16'>
          <div>
            <Link to='/car-details'>
              <p className='text-deepblack font-bold text-base capitalize tracking-tighter pb-1 lg:text-xl'>
                {car?.name}
              </p>
              <p className='text-xs text-slate-400 lg:text-sm'>
                {car?.category.name}
              </p>
            </Link>
          </div>
          <div className='text-red-600'>
            <button onClick={() => console.log('clicked fav icon')}>
              {loveIcon}
            </button>
          </div>
        </div>
        {/* image */}
        <div className='flex justify-center mb-11'>
          <Link to='/car-details'>
            <div className='relative w-44 lg:w-56'>
              <img className='w-full' src={carImg} alt="car" />
              {/* car shadow */}
              <div className='absolute -bottom-6 w-[110%] h-full bg-gradient-to-t from-white'></div>
            </div>
          </Link>
        </div>
        {/* Specification */}
        <div className='flex justify-between mb-7'>
          <div className='flex text-slate-400'>
            <span className='inline-block w-3.5 h-3.5 mr-1 lg:mr-2 lg:h-5 lg:w-5'>
              {gasIcon}
            </span>
            <span className='text-xs font-medium lg:text-sm lg:font-normal'>
              {
                car?.specification?.gasoline
              }
            </span>
          </div>
          <div className='flex text-slate-400'>
            <span className='inline-block w-3.5 h-3.5 mr-1 lg:mr-2 lg:h-5 lg:w-5'>
              {gasIcon}
            </span>
            <span className='text-xs font-medium lg:text-sm lg:font-normal'>
              {
                car?.specification?.steering
              }
            </span>
          </div>
          <div className='flex text-slate-400'>
            <span className='inline-block w-3.5 h-3.5 mr-1 lg:mr-2 lg:h-5 lg:w-5'>
              {gasIcon}
            </span>
            <span className='text-xs font-medium lg:text-sm lg:font-normal'>
              {
                car?.specification?.capacity
              }
            </span>
          </div>
        </div>
    <div className="flex justify-between items-center">
      <div>
        <span className='text-base text-deepblack font-bold lg:text-xl'>
          $
          {
            car.price.toFixed(2) 
          }/
        </span>
        <span className='text-xs text-slate-400 lg:text-sm'>day</span>
      </div>
      <Button classes="md:px-3 md:py-2" onClick={() => {}}>
        rental now
      </Button>
    </div>
  </div>
  )
}


const loveIcon = <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23C10.99 3.98 9.37 3.1 7.56 3.1 4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z" fill="currentcolor"/></svg>;

const gasIcon = <svg className="w-full h-full" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill="currentcolor"/>
</svg>;

export default ProductCard;