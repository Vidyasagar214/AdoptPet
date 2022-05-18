import React,{useState,useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import Footer from './Footer'

function List() {
    const [APIData, setAPIData] = useState([]);
    const [filteredPolls, setfilteredPolls] = useState(null);
    const [query, setQuery] = useState("");

    const fetchApi=()=>{
       
        axios.get(`https://625fecb853a42eaa07fd7020.mockapi.io/petList`)
            .then((response) => {
                  setAPIData(response.data);
                 console.log(response.data)
                 setfilteredPolls((response.data).filter(e => e.type === "dog"));
            })
           
          
    }
    
     useEffect(() => {
        fetchApi();
      }, [])

    var dog = APIData.filter(e => e.type === "dog")
    var cat = APIData.filter(e => e.type === "cat")
    var rabbit = APIData.filter(e => e.type === "rabbit")    
    var all= APIData;
    
    function DogList() {
        setfilteredPolls(dog);   
    }

    function CatList() {
        setfilteredPolls(cat);  
    }

    function RabbitList() {
        setfilteredPolls(rabbit);  
    }
    function AllList() {
        setfilteredPolls(all);  
    }
    

  return (
  <>  
  
  <div  class="background w-100 h-100 ">
           
           <div class="sticky-top header pb-1">
             <p class="title m-0 ps-3 fs-3 fw-bold">AdoptPet</p>
                <div className='pt-5'>
              <div class=" bg-light rounded rounded-pill shadow-sm mb-1 mx-2">
             <div class="input-group">
                <div class="input-group-prepend">
                <div class="input-group-prepend">
                  <button id="button-addon2" type="submit" class="btn btn-link text-warning"><AiOutlineSearch/></button>
                </div>
                </div>
                  <input type="search" placeholder="search pet name" onInput={()=>AllList()} onBlur={()=>DogList()} onChange={event => setQuery(event.target.value)} class="form-control mx-3 border-0 bg-light"/>
                </div>
              </div>
              </div>
              
            <div class="mx-2 my-2 d-flex justify-content-between headbody">
                    <button class="col-xm-4 btn p-1 rounded-pill active" onClick={() => DogList()} >
                   <img src="../Images/dog.jpg" class="petsimg rounded-circle" />Dogs</button>
                   <button  class="  col-xm-4 btn  p-1 rounded-pill active"  onClick={() => CatList()}>
                   <img src="../Images/cat.jpg" class="petsimg rounded-circle"/>Cats</button>
                   <button  class=" col-xm-4 btn rounded-pill p-1 active"  onClick={() => RabbitList()}>
                   <img src="../Images/rabbit.jpg" class="petsimg rounded-circle" />Rabbits</button>
                   
           </div> 
          </div>
 
          <div class="container d-flex flex-column justify-content-center px-4">
          {filteredPolls && filteredPolls.filter(data => {
           if (query === '') {
           return data;
           } else if (data.caption.toLowerCase().includes(query.toLowerCase())) {
           return data;
           }
           else{
               <h4>No Records </h4>
           }
           }) .map((data) => (
              <div class="col my-3 gridBox w-100" key={data.id}>
                 <NavLink to={"/Details/" + data.id}>
                 <img src={data.src} alt="noDog" class="w-100 PetsImg"/>
                 </NavLink>
                 <div class="caption text-white">
                   <p class="fw-bold p-0 m-0">{data.caption}</p>
                   <span><small>{data.age}</small></span>
                 </div>
              
             </div>
          ))}
 
   </div>
   </div>
      <Footer/>

  
  </>
  )
}

export default List