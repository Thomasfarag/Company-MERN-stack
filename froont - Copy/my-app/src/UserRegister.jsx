import React from 'react'
import style from  './style.module.css';
import  { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup';

function UserRegister() {
    const [isloading, setIsLoading] = useState(false)


 
  

    const navigate = useNavigate();
    async function handleRegisterind(values) {
        setIsLoading(true)
        try {
          let { data } = await axios.post(`http://localhost:3000/api/v1/user/signUp`,values);
          if (data.message === 'Success') {
            console.log(data.addedUser);
            setIsLoading(false)
            navigate('/signin');
          }
          console.log(values);
        } catch (error) {
        console.log("this is thse eofj",error);
        }
      }


    let validationSchema=Yup.object({
      name:Yup.string().required(' Name is required').min(3,'name minimum length is 3 characters').max(10,'name maximum length is 10 characters'),
      email:Yup.string().required('email is required').email('Email is not valid'),
      address:Yup.string().required("Address is required"),
      // phoneNumber:Yup.string().required('Phone number is required').matches(/^01[0125][0-9]{8}$/,'Phone number must be a egyption number'),
      password:Yup.string().min(6,'Password must be at least 6 characters long').required('password is required'),
     
    })


    let formik = useFormik({
        initialValues:{
            name:'',
            email: '',
            address: '',
            password : ''
        },validationSchema, onSubmit:handleRegisterind
    });
  return (
   <>
   
   
   
 <body style={{ background: '#007bff', background: 'linear-gradient(to right, #0062E6, #33AEFF)' ,height: '100vh'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                  <div className="card-img-left d-none d-md-flex" style={{ width: '45%', background: 'scroll center url("https://source.unsplash.com/WEQbe2jBg40/414x512")', backgroundSize: 'cover' }}>
                    {/* Background image for card set in CSS! */}
                  </div>
                    <div className="card-body p-4 p-sm-5">
                    <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                    <form
onSubmit={(e) => {
  e.preventDefault();
  formik.handleSubmit(e);
  handleRegisterind({
    ...formik.values
    
  });
}}
>
    
                      <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" value={formik.values.name} className="form-control"name='name' id="name" placeholder="myusername" required autoFocus />
                        <label htmlFor="name">Name</label>
                        {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> :null}
                   
                      </div>
    
                      <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email"value={formik.values.email} className="form-control" id="email" name='email' placeholder="name@example.com" />
                        <label htmlFor="email">Email </label>
                        {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> :null}

                      </div>
                      <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" value={formik.values.address} className="form-control" id="address" name='address' placeholder="name@example.com" />
                        <label htmlFor="address">Adress </label>
                        {formik.errors.address && formik.touched.address ? <div className="alert alert-danger">{formik.errors.address}</div> :null}

                      </div>
                      {/* <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" value={formik.values.phoneNumber} className="form-control" id="phoneNumber" name='phoneNumber' placeholder="name@example.com" />
                        <label htmlFor="phoneNumber">Phone Number </label>
                        {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className="alert alert-danger">{formik.errors.phoneNumber}</div> :null}

                      </div> */}
                      <div className="form-floating mb-3">
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" value={formik.values.password} className="form-control" id="password" name='password' placeholder="name@example.com" />
                        <label htmlFor="password">Password </label>
                        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> :null}

                      </div>
                     
          
               
               

                      



{/* ____________________________________________________________________________________________________________________________ */}

                      <hr />
    
                   
    
                   
    
                      <div className="d-grid mb-2">
                        {isloading?  <button type="button"  className="btn btn-lg btn-primary btn-login fw-bold text-uppercase text-white" ><i className='fas fa-spinner fa-spin'></i></button> :<button type="submit"  className="btn btn-lg btn-primary btn-login fw-bold text-uppercase text-center" >Register</button>}
                       
                        
                      </div>
    
    
                      <hr className="my-4" />
    

    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body></>
  )
}

export default UserRegister
