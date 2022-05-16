import React from 'react';
import {IoIosCall} from 'react-icons/io';
import {HiHome} from 'react-icons/hi';
import {MdPets,MdInfo} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
   <>
           <div class="d-flex justify-content-around bg-white p-3 footer w-100">     
                 <NavLink to="/" className="icon" activeClassName="active" ><HiHome size={30}/></NavLink>
                 <NavLink to="/List" className="icon active" activeClassName="active" ><MdPets size={30} /></NavLink>
                 <NavLink to="/" className="icon" activeClassName="active" ><MdInfo size={30} /></NavLink>
                 <NavLink to="/" className="icon" activeClassName="active" ><IoIosCall size={30}/></NavLink>
           </div>   
   </>
  )
}

export default Footer