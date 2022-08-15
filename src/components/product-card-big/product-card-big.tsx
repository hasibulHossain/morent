import Button from '../button/button'
import carSuvImg from '../../assets/imgs/car-suv.png';

function ProductCardBig() {
  return (
    <div className="min-w-fit w-full grow-0 shrink-0 bg-white rounded-lg p-4 drop-shadow lg:w-auto lg:flex-auto">
    <div className='flex justify-between mb-8'>
      <div>
        <p className='text-deepblack font-bold text-base capitalize tracking-tighter pb-1 lg:text-xl'>koeniggsegg</p>
        <p className='text-xs text-slate-400'>Sport</p>
      </div>
      <div className='text-red-600'>
        {loveIcon}
      </div>
    </div>
    <div className='flex justify-between mb-8 lg:gap-10'>
      <div className='w-44 relative lg:basis-3/5'>
        <img className='w-full' src={carSuvImg} alt="car" />
      {/* car shadow */}
        <div className='absolute flex-none top-11 w-[110%] h-4/6 bg-gradient-to-t from-white lg:w-[100%] lg:top-16 lg:h-3/6 xl:top-24'></div>
      </div>
      {/* Specification */}
      <div className='flex flex-col items-start justify-between lg:lg:basis-2/5'>
        <div className='flex text-slate-400 pb-4 lg:items-center'>
          <span className='inline-block w-3.5 h-3.5 mr-1 lg:w-6 lg:h-6 lg:mr-2'>
            {gasIcon}
          </span>
          <span className='text-xs font-normal lg:text-sm'>
            90L
          </span>
        </div>
        <div className='flex text-slate-400 pb-4 lg:items-center'>
          <span className='inline-block w-3.5 h-3.5 mr-1 lg:w-6 lg:h-6 lg:mr-2'>
            {gasIcon}
          </span>
          <span className='text-xs font-normal lg:text-sm'>
            Manual
          </span>
        </div>
        <div className='flex text-slate-400 pb-4 lg:items-center'>
          <span className='inline-block w-3.5 h-3.5 mr-1 lg:w-6 lg:h-6 lg:mr-2'>
            {gasIcon}
          </span>
          <span className='text-xs font-normal lg:text-sm'>
            6 People
          </span>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <div>
        <div>
          <span className='text-base text-deepblack font-bold lg:text-xl'>$99.00/ </span>
          <span className='text-xs text-slate-400 lg:text-sm'>day</span>
        </div>
        <div>
          <span className='text-xs text-slate-400 line-through font-medium'>$90.00</span>
        </div>
      </div>
      <Button onClick={() => {}}>
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

const userIcon = <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 1.1667c-1.5282 0-2.7708 1.2425-2.7708 2.7708 0 1.4992 1.1725 2.7125 2.7009 2.765.0466-.0058.0933-.0058.1283 0h.0408C6.8426 6.65 8.0152 5.4367 8.021 3.9375c0-1.5283-1.2425-2.7708-2.7708-2.7708ZM8.2133 8.2542c-1.6275-1.085-4.2817-1.085-5.9208 0-.7409.4958-1.1492 1.1666-1.1492 1.8841s.4083 1.3825 1.1433 1.8725c.8167.5484 1.89.8225 2.9634.8225 1.0733 0 2.1466-.2741 2.9633-.8225.735-.4958 1.1433-1.1608 1.1433-1.8841-.0058-.7175-.4083-1.3825-1.1433-1.8725ZM11.6607 4.2816c.0933 1.1317-.7117 2.1234-1.8258 2.2576H9.8057c-.035 0-.07 0-.0991.0116-.5659.0292-1.085-.1517-1.4759-.4841.6008-.5367.945-1.3417.875-2.2167-.0408-.4725-.2042-.9042-.4492-1.2717.2217-.1108.4784-.1808.7409-.2041 1.1433-.0992 2.1641.7525 2.2633 1.9074Z" fill="currentcolor"/><path d="M12.8276 9.6775c-.0467.5658-.4084 1.0558-1.015 1.3883-.5834.3209-1.3184.4725-2.0475.455.42-.3791.665-.8516.7116-1.3533.0584-.7233-.2858-1.4175-.9741-1.9717-.3909-.3091-.8459-.5541-1.3417-.735 1.2892-.3733 2.9108-.1225 3.9083.6825.5367.4317.8109.9742.7584 1.5342Z" fill="currentcolor"/></svg>;

export default ProductCardBig