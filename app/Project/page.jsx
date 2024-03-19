import React from 'react';
import Menu from './Menu/Menu'

const page = () => {
  return (
    <div >
      <p className='font-bold text-3xl sm:text-4xl flex justify-center pb-8' id="Project" >My Project</p>
      <Menu/>
    </div>
  );
}

export default page;
