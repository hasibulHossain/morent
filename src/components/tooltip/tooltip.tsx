import React from 'react'

interface Props {
    children: React.ReactNode;
}

const Tooltip:React.FC<Props> = ({ children }) => {

  return (
    <span className='group-hover:scale-100 group-hover:delay-500 delay-100 transition w-auto min-w-max absolute inline-block text-xs text-white bg-black scale-0 rounded-sm left-0 -bottom-3/4 px-2 py-1'>
        {
            children
        }
    </span>
  )
}

export default Tooltip