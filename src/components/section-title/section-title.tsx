import {FC} from 'react';

interface Props {
    title: string,
}

const SectionTitle:FC<Props> = (props: Props) => {
  return (
    <div className='container'>
    <div className=' flex justify-between items-center mt-8 mb-5 lg:my-10 lg:px-5'>
      <span className='inline-block text-slate-500 font-medium text-sm capitalize'>{props.title}</span>
      <a href="#" className='inline-block text-primaryblue text-xs font-medium lg:text-sm'>
        view all
      </a>
    </div>
  </div>
  )
}

export default SectionTitle