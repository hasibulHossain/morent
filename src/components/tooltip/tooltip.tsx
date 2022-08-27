import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Tooltip:React.FC<Props> = ({ children }) => {

  return (
    <span className='group-hover:inline-block group-hover:opacity-100 group-hover:duration-75 group-hover:delay-500 inline-block transition duration-300 opacity-0 w-auto min-w-max absolute text-xs text-white bg-deepblack rounded-sm left-1/2 -bottom-3/4 -translate-x-1/2 px-2 py-1'>
        {
            children
        }
    </span>
  )
}

export default Tooltip