import React from 'react';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
   <>
     <div className="background">
      <div className=" h-100 ">
         <div clasName=" col bgimg mb-2">
         <p className="title m-0 ps-3 fs-3 fw-bold">AdoptPet</p>
             <img src='../images/pet1.jpg' alt='nopic' className='w-100'/>
           
         </div>
          <div className=" col px-4 mt-5 text-center">
             <h3 className="display-4 fw-bold">Find Your Dream Pet Here</h3>
             <p className="p-1 fw-bold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium  ut perspiciatis </p>
              <NavLink to="/List"><BsArrowRightCircleFill size={50} className="text-primary mt-5"/></NavLink>
          </div>
      </div>
    </div>
         
   </>
  )
}

export default Home