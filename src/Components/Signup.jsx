import React from 'react';
import Navnext from './Navnext';
import element from "../Assets/element.png";
const Signup = () => {
  return (
    <div>
       <Navnext />
       <div>
       <img src={element} alt='background' className='absolute top-0 left-0 w-40% h-[500px] z-0  object-cover' />
      
       </div>
    </div>
  )
}

export default Signup