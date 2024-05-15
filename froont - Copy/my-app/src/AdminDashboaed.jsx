import { Link } from 'react-router-dom'
import style from './style.module.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function AdminDashboaed() {
  const [service, setService] = useState([])


  async function getServices(){
    let {data} =await axios.get(`http://localhost:3000/api/v1/service/services`);
    if(data.message==='Success'){
      setService(data.categories)
      console.log(data.categories);
    }
  }
 async function deleteService(serviceId){
    console.log(serviceId);

    let {data} =await axios.delete(`http://localhost:3000/api/v1/service/deleteServices/${serviceId}`)
    if(data.message==="Success"){
      console.log('deleted');
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "this  service will be deleted!",
        showCancelButton: false,
        showConfirmButton: false
      
        
      })
      window.location.reload()
      
    }
  }
  useEffect(() => {
   getServices()
  }, [])
 

  return (
    <>
    <body style={{ height:"100vh"}}>
      
      <nav className="navbar navbar-expand-lg ">
  <div className="container ">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item d-flex float-right ">
          <Link className="nav-link text-light" to="/" onClick={() => localStorage.removeItem('userToken')}>Log Out</Link>
        </li>
      </ul>
     </div>
   </div>
</nav>

<h1 className='fw-2 text-center text-light'>Company services</h1>

{/* <form className='form-control container w-75'>
  <label className='mb-auto' htmlFor="name">Service Name</label>
  <input type="text" id='name' className='form-control' />
</form> */}
<div className="container">
  <Link to={'/addService'} className='btn btn-outline-light mx-5'>Add Service</Link>
        <div className="row  mx-auto">
  {service.map((serv,i) => (
      <div key={i} className="col-md-4 mt-5"  style={{color : '#adbeff'}}>

       <div className={style.cardClient} style={{overflow:'visible'}}>
      <h6 className='fs-5'>Category Name: <span className=' fw-bold'style={{color: 'Background'}}>{serv.categoryName}</span></h6>
        <h6 className='fs-5'>Category Service: <span className=' fw-bold' style={{color: 'Background'}}>{serv.categoryService}</span></h6>
      <div className={style.socialMedia}>
        <div className={style.form}>
            <span className={style.inputBorder}></span>
            <div className="row ">
                <div className="col-md-12">
                <Link to={`../editService/${serv._id}`}  className='btn w-100 mx-auto' style={{ background: '#ffaf7e', color: 'white' }} type="submit">Edit Service</Link>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                <Link onClick={()=>{deleteService(serv._id)}} className='btn w-100 mx-auto px-auto ' type='button' style={{ background: '#f9818e', color: 'white' }}>Delete Service</Link>
                </div>
            </div>
        </div>
               </div>
  

    </div> 
    </div>
      
      ))}
  </div>
</div>

      </body>
    </>
  )
}

export default AdminDashboaed
