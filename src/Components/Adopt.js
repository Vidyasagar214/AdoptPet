import React,{useState,useEffect,useRef} from 'react';
import Footer from './Footer';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';
import emailjs from "emailjs-com";

function Adopt() {
const form=useRef();
  
// fetching the selected  dog details 
   const [APIData, setAPIData] = useState([]);
   const petId = useParams();
        useEffect(() => {
         console.log(petId);
         axios.get(`https://625fecb853a42eaa07fd7020.mockapi.io/petList/${petId.id}`)
             .then((response) => {      
                 setAPIData(response.data);
                 console.log(response.data)
               })}, [petId.id])
             console.log(APIData)

//  Submitting the for data
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [msg1, setMsg1] = useState('');
    const navigate= useNavigate();

    const postData = (e) => {
      e.preventDefault();
      if(name==="" && email==="" && phone==="") {
        setError("All Fields Are Required to be filled.");
        return false;
      }
      if(name.trim()==="") {
        setError("Employee Name must be Filled.");
        return false;
      }
      if(email===""){
        setError("Email must be filled.");
        return false;
      }
      if(phone==="") {
        setError("Phone number must be filled.");
        return false;
      }
      else{
          axios.post(`https://625fecb853a42eaa07fd7020.mockapi.io/AdoptForm`, {
          name,
          email,
          phone,
          petId
          })
          emailjs.sendForm('service_ltaf6n2', 'template_xydkx0q', form.current, 'qDLnj3R9-z4NcTfnY')
         .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        setError("");
         displayMsg();
         hideMsg();
         navigation();
        
        return true;
        }}

        function displayMsg(){
          setTimeout(()=> setMsg(`Details Saved Successfully.
              You adopted ${petId.id}`),
              setMsg1(` You are now redirected to the HOME page`),300);
        }
        function hideMsg(){
          setTimeout(()=> setMsg(""),3000);
        }
        function navigation(){
          setTimeout(()=> navigate("/List"),3000);
        }
      


  return (
    <>
     <form ref={form} onSubmit={postData}>
    <div class="background w-100">           
          
          <p class="title m-0 pt-2 ps-3 fs-3 fw-bold">AdoptPet</p>
         
          <div class="container d-flex flex-column justify-content-center pt-5 px-3">  
             <div class="col my-3 gridBox w-100">
                 <img src={APIData.src} alt="noDog" class="w-100 PetsImg"/>
                  <div class="caption text-white">
                   <p class="fw-bold p-0 m-0">{APIData.caption}</p>
                   <span><small>{APIData.age}</small></span>
                 </div>
              </div>
           
          </div>
          
            <div class="px-3">
               {/*Submit Message  */}  
           {msg && <p className='lead text-success fw-bold  text-center fst-italic'>{msg}</p>}
           {msg1 && <p className='text-primary text-center fst-italic'>{msg1}</p>}
          <div class="mb-3">
            <label  class="form-label m-0">Your Name</label>
            <input type="text" name="user_name"  class="form-control rounded-pill" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label  class="form-label m-0">Email </label>
            <input type="email" name="user_email"  class="form-control rounded-pill" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label  class="form-label m-0">Phone/Mobile Number</label>
            <input type="text" name="user_phone"  class="form-control rounded-pill" onChange={(e) => setPhone(e.target.value)}/>
          </div>
           {/*Error Message  */}  
           {error&&<p className='text-danger fst-italic'>{error}</p>}
          </div>
      
      
       
        <div class="d-grid gap-0 mt-4 px-3">
           <button  class="btn btn-primary btn-lg p-3 mt-3 rounded-pill"  type="submit">Adopt Now</button>
         </div>
     </div>
     </form>
    
          
         
          <Footer/>

    
    </>
  )
}

export default Adopt