import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './style.module.css'

function Home() {
  const [service, setService] = useState([])
  async function getServices(){
    let {data} =await axios.get(`http://localhost:3000/api/v1/service/services`);
    if(data.message==='Success'){
      setService(data.categories)
      console.log(data.categories);
    }
  }
  useEffect(() => {
   getServices()
  }, [])
  
  return (
  
    <>
      
    <div className={style.secBack} style={{height:"100vh"}}>
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item d-flex float-right ">
          <Link className="nav-link text-light" to="/" onClick={() => localStorage.removeItem('userToken')}>Log Out</Link>
        </li>
      </ul>
     </div>
   </div>
</nav>
<h1 className='text-center text-light'>Home page</h1>

<br />
<div className="container">
        <div className="row  mx-auto">
  {service.map((serv,i) => (
    <div key={i} className="col-md-4 mt-5"  style={{color : '#adbeff'}}>

       <div className={style.cardClient} style={{overflow:'visible'}}>
      <h6 className='fs-5'>Category Name: <span className=' fw-bold'style={{color: 'Background'}}>{serv.categoryName}</span></h6>
        <h6 className='fs-5'>Category Service: <span className=' fw-bold' style={{color: 'Background'}}>{serv.categoryService}</span></h6>
      <div className={style.socialMedia}>
        <div className={style.form}>
            <span className={style.inputBorder}></span>
            
        </div>
               </div>
  

    </div> 
    </div>
      
    ))}
  </div>
</div>


      </div>
   </>
    
  )
}

export default Home
