import React,{useState,useEffect} from 'react';
import Footer from './Footer';
import axios from 'axios';
import {NavLink, useParams} from 'react-router-dom'


function Details() {

    const [APIData, setAPIData] = useState([]);
    const params = useParams();
    useEffect(() => {
     console.log(params);
     axios.get(`https://625fecb853a42eaa07fd7020.mockapi.io/petList/${params.id}`)
         .then((response) => {      
             setAPIData(response.data);
             console.log(response.data)
           })}, [params.id])
 console.log(APIData)

  return (
    <>
   
    
    <div class="background w-100">           
        <p class="title m-0 ps-3 fs-3 fw-bold">AdoptPet</p>
          <div class="container d-flex flex-column justify-content-center pt-5 px-3">  
          <div class="col my-3 gridBox w-100">
                 <img src={APIData.src} alt="noDog" class="w-100 PetsImg"/>
                  <div class="caption text-white">
                   <p class="fw-bold p-0 m-0">{APIData.caption}</p>
                   <span><small>{APIData.age}</small></span>
                 </div>
              </div>
           
          </div>
          
          <div class="px-4">
           <div class="text-dark d-flex justify-content-start">
              <div class="key">
              Breed <br></br>
              Gender<br></br>
              Age<br></br>
              </div>
              <div class="fw-bolder ms-4">
               {APIData.caption}<br></br>
               Male<br></br>
              {APIData.age}
              </div>
        </div>
        <p class="para my-3">{APIData.description}</p>
      
       
        <NavLink to={"/Adopt/" + APIData.id} className="text-decoration-none">
          <div class="d-grid gap-0 mt-5">
             <a  class="btn btn-primary btn-lg p-3 mt-3 rounded-pill " type="button" >Adopt Now</a>
          </div>
        </NavLink>
     </div>
    
     </div> 
          
         
          <Footer/>

    </>
  )
}

export default Details