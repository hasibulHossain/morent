import React, {useContext, useRef, useState} from 'react'
import classNames from 'classnames'
import { AppContext } from '../../App'
import Select, {StylesConfig} from 'react-select';

interface Options {
  value: string;
  label: string;
}

type IsMulti = false;

const options: Options[] = [
  { value: 'dhaka', label: 'dhaka' },
  { value: 'Mirpur', label: 'Mirpur' },
  { value: 'Mohakhali', label: 'Mohakhali' },
  { value: 'Manikdi', label: 'Manikdi' },
  { value: 'Uttara', label: 'Uttara' },
  { value: 'Gulshan', label: 'Gulshan' },
  { value: 'Gendaria', label: 'Gendaria' },
  { value: 'Beribadh', label: 'Beribadh' },
  { value: 'Gazipur', label: 'Gazipur' },
];

function Filter() {
  const state = useContext(AppContext);
  const selectRef = useRef<any>();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [location, setLocation] = useState<Options>(options[0])

  console.log(selectRef);

  const selectHandler = () => {
    if(!isSelectOpen) {
      setTimeout(() => {
        selectRef.current.focus();
      });
    };

    setIsSelectOpen(prevState => !prevState);
  }
  const classes = classNames('flex flex-col md:flex-row xl:flex-row', {
    'lg:flex-col': state.isFilterOpen,
    'lg:flex-row': !state.isFilterOpen,
  });

  const filterInterchangeClasses = classNames('p-4 bg-primaryblue drop-shadow text-white grow-0 self-center rounded-lg z-10 -my-3 md:-mx-2', {
    'lg:-my-4 xl:-mx-2': state.isFilterOpen,
    'lg:my-0 lg:mx-11': !state.isFilterOpen,
  })

  const customStyles: StylesConfig<Options, IsMulti> = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      fontSize: '14px',
      height: '16px',
      minHeight: '16px',
    }),
    container: (provided, state) => ({
      ...provided,
      padding: '0px',
      margin: '0px'
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: '0px'
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none'
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: '0px 6px 0px 0px',
      minHeight: '16px',
      height: '16px',
    }),

  };

  return (      <div className={classes}>
  {/* pick-up filter */}
  <div className='bg-white p-4 drop-shadow rounded-lg lg:flex-auto'>
    <div className='mb-6'>
      <span className='inline-block w-2 h-2 mr-3 bg-primaryblue ring-4 ring-opacity-30 ring-primaryblue rounded-full'></span>
      <span className='text-base font-medium text-deepblack'>Pick - Up</span>
    </div>
    <div className='flex divide-x'>
      <div className='flex-none basis-1/3 px-4'>
        <p className='text-base font-bold text-deepblack pb-2'>Locations</p>
        {
          !isSelectOpen ? (
            <p onClick={selectHandler} className='text-xs text-slate-400 flex items-center cursor-pointer'>
              {location.label}
              <span className='inline-block ml-1'>
              <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0003 8.3997c-.35 0-.7-.135-.965-.4l-3.26-3.26c-.145-.145-.145-.385 0-.53.145-.145.385-.145.53 0l3.26 3.26c.24.24.63.24.87 0l3.26-3.26c.145-.145.385-.145.53 0 .145.145.145.385 0 .53l-3.26 3.26c-.265.265-.615.4-.965.4Z" fill="#1A202C" stroke="#1A202C" strokeWidth=".5"/></svg>
              </span>
            </p>
          ) : (
            <div className='w-[150px] max-w-[150px]'>
              <Select
                onChange={(newValue, actionMeta) => setLocation(newValue as Options)}
                onBlur={selectHandler}
                styles={customStyles}
                ref={selectRef}
                inputId='select-input'
                classNamePrefix="select"
                defaultValue={options[0]}
                openMenuOnFocus
                isSearchable
                name="location-select"
                options={options}
                menuPortalTarget={document.body}
                blurInputOnSelect
              />
            </div>
          )
        }

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