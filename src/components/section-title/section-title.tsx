import {FC} from 'react';
import {Link} from 'react-router-dom';

interface Props {
    title: string,
    to?: string,
}

const SectionTitle:FC<Props> = (props: Props) => {
  const { to = '/cars'} = props;
  
  return (
    <div className='container'>
    <div className=' flex justify-between items-center mt-8 mb-5 lg:my-10 lg:px-5'>
      <span className='inline-block text-slate-500 font-medium text-sm capitalize'>{props.title}</span>
      <Link to={to} className='inline-block text-primaryblue text-xs font-medium lg:text-sm'>
        view all
      </Link>
    </div>
  </div>
  )
}

export default SectionTitle