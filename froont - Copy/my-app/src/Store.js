import { createContext } from "react";
import React from 'react'
import  { useState, useEffect , useContext } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup';
export let registrationContext = createContext(0);

export default function registrationContextProvider(props){


    return  <registrationContext.Provider value={{}}>
        {props.children}
    </registrationContext.Provider> 

    
    
}