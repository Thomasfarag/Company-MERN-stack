import React from 'react'
import style from  './style.module.css';
import  { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup';
function SignUp() {
  return (
   <>
  
   
   <body style={{ background: '', background: 'linear-gradient(to right, #0062E6, #33AEFF)',height:"100vh" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                  <div className="card-img-left d-none d-md-flex" style={{ width: '45%', background: 'scroll center url("https://source.unsplash.com/WEQbe2jBg40/414x512")', backgroundSize: 'cover' }}>
                    {/* Background image for card set in CSS! */}
                  </div>
                    <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                    <form>
    
                    
    
                    
                   
                      

{/* _____________________________________________Subject___________________________________________________________ */}
                      
                      

                      <hr />
    
      
    
             
        <div className="container w-100  mt-4  ">
    <h1 className='text-center'>Welcome To Our Site</h1>
    <h4 className='text-center'>Sign Up As</h4><br />
    <form className='text-center'>
      <Link to={'/signin'} className='w-50 btn btn-primary text-center mb-3'>As Admin</Link><br />
      <Link to={'/userRegister'} className='w-50 btn btn-warning text-center mb-5'>As User</Link >

      
    </form>


   </div>            
    
              
    
    
                      <hr className="my-4" />
    

    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
   </>
  )
}

export default SignUp
