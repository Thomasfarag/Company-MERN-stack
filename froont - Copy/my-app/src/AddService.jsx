import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddService() {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues:{
          categoryName:'',
          categoryService:''
    
        },onSubmit:handleAddService
      })
    async  function handleAddService(values){
        let {data} =await axios.post(`http://localhost:3000/api/v1/service/addService` ,values)
        if (data.message ==="Success") {
            console.log(data.addedService);
            Swal.fire({
                icon: 'success',
                title: 'Service Added Successfully',
                text: `${formik.values.categoryName}' Service has been Added.`,
                showConfirmButton: false,
                timer: 2000,
              });
              navigate('../signin/adminDashboard')

            
        }
      }
  return (
    <>
    <div className="container w-50 " style={{ height:"100vh"}}>
        <h3>Add Service </h3>

    <form onSubmit={formik.handleSubmit} >
        <div className="mt-4">

       
        <label htmlFor="categoryName">Category Name :</label>
        <input type="text" id='categoryName' onBlur={formik.handleBlur}value={formik.values.categoryName} className='form-control bg-transparent text-light mt-2 ' onChange={formik.handleChange} />
         </div>
         <div className="mt-4">

        <label htmlFor="categoryService">Category Sercice :</label>
        <input placeholder='Category Sercice' type="text" id='categoryService' onBlur={formik.handleBlur}value={formik.values.categoryService} className='form-control bg-transparent text-light mt-2' onChange={formik.handleChange} />
        </div>
        <div className="row justify-content-center mt-2">

        <button className='btn btn-outline-primary w-50 mt-4 h-25' type='submit'>Submit Service</button>
        </div>

    </form>
    </div>
    </>
  )
}

export default AddService
