import React from 'react'
import style from  './style.module.css';
import  { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup';
import { logDOM } from '@testing-library/react';
import { jwtDecode } from 'jwt-decode';

function SignIn() {
  const [isloading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSignIn(values) {
      setIsLoading(true)

      try {

        let { data } = await axios.post(`http://localhost:3000/api/v1/user/signIn`,values);
        if (data.message === 'Welcome') {
          console.log('Welcome');
          localStorage.setItem('userToken' , data.token);
          console.log(data.token);
          let decodedToken = jwtDecode(data.token);
             console.log(decodedToken.role);
       if (decodedToken.role==='admin') {
        setIsLoading(false)
        navigate('adminDashboard')
               
       }else{
          setIsLoading(false)
          navigate('/home');
          
       }
               
            
          
           
         
        }
        console.log(values);
      } catch (error) {
      
      }
    }
    let validationSchema=Yup.object({
      email:Yup.string().required('email is required').email('Email is not valid'),
      password:Yup.string().required('Password is required'),
    })
    
    let formik = useFormik({
        initialValues:{
            email: '',
            password:'',
   
        },validationSchema,
        onSubmit:handleSignIn
    });
              
    return (
    <div>
       <body style={{ background: '#007bff', background: 'linear-gradient(to right, #0062E6, #33AEFF)',height:'100vh' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                  <div className="card-img-left d-none d-md-flex" style={{ width: '45%', background: 'scroll center url("https://source.unsplash.com/WEQbe2jBg40/414x512")', backgroundSize: 'cover' }}>
                    {/* Background image for card set in CSS! */}
                  </div>
                    <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title text-center mb-5 fw-light fs-5">Login </h5>
                    <form onSubmit={formik.handleSubmit}>
    
    
                    <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email"value={formik.values.email} className="form-control" id="email" name='email' placeholder="name@example.com" />
                        <label htmlFor="email">Email address</label>
                        {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> :null}
                    </div>

                
    
                      <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className="form-control" id="password" name='password' placeholder="Password" />
                        <label htmlFor="password">Password</label>
                        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> :null}

                      </div>
    
 
    
                      <div className="d-grid mb-2">
                      {isloading?  <button type="button"  className="btn btn-lg btn-primary btn-login fw-bold text-uppercase text-white" ><i className='fas fa-spinner fa-spin'></i></button> :<button type="submit"  className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" >SignIn</button>}
                      </div>
    
                      <Link className="d-block text-center mt-2 small" to="../">Doesn't have an account? Register</Link>
    
                      <hr className="my-4" />
    

    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
            
    </div>
  )
}

export default SignIn
