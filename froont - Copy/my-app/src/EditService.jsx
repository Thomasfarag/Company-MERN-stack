    import axios from 'axios'
    import { useFormik } from 'formik'
    import React, { useEffect, useState } from 'react'
    import { useNavigate, useParams } from 'react-router-dom';
    import Swal from 'sweetalert2';
    function EditService() {
        const [specificService, setSpecificService] = useState([])
        const navigate = useNavigate();
        const { id } = useParams();

        useEffect(() => {
            const fetchServiceDetails = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/v1/service/service/${id}`);
                    const { data } = response;

                    if (data.message === "Success") {
                        setSpecificService(data.service);
                    }
                } catch (error) {
                    console.error('Error fetching service details:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchServiceDetails(); // Call the function once the component is mounted or id changes
        }, [id]); // Add id to the dependencies array to re-run the effect when id changes

        useEffect(() => {
            console.log(specificService); // Log specificService when it changes
        }, [specificService]); // Add specificService to the dependencies array

        const handleEditService = async (values) => {
            try {
                const {data} = await axios.put(`http://localhost:3000/api/v1/service/updateServices/${id}`, values);
                if (data.message === 'Service updated successfully') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Service updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('../signin/adminDashboard'); // Redirect to services page after successful update
                } 
            } catch (error) {
                console.error('Error updating service:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update service!'
                });
            }
        };
        const [loading, setLoading] = useState(true);
        const [initialValues, setInitialValues] = useState({
            categoryName: '',
            categoryService: ''
        });  
        let formik = useFormik({
            initialValues: {
                categoryName: specificService.categoryName || '',
                categoryService: specificService.categoryService || ''
            },onSubmit:handleEditService
        })
       
        const handleChange = (e) => {
            const { name, value } = e.target;
            setSpecificService(prevState => ({
                ...prevState,
                [name]: value
            }));
            formik.handleChange(e);
        };

    return (
        
        <>
        <div className="container w-50" style={{ height: "100vh" }}>
            <h3>Edit Service</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="categoryName">Category Name :</label>
                    <input type="text" id="categoryName" name="categoryName" onBlur={formik.handleBlur} value={specificService.categoryName} className="form-control bg-transparent text-light mt-2" onChange={handleChange} />
                </div>
                <div className="mt-4">
                    <label htmlFor="categoryService">Category Service :</label>
                    <input type="text" id="categoryService" name="categoryService" onBlur={formik.handleBlur} value={specificService.categoryService} className="form-control bg-transparent text-light mt-2" onChange={handleChange} />
                </div>
                <div className="row justify-content-center mt-2">
                    <button className="btn btn-outline-primary w-50 mt-4 h-25" type="submit">Update Service</button>
                </div>
            </form>
        </div>
    </>
    )
    }

    export default EditService
