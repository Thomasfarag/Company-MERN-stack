import logo from './logo.svg';
import './App.css';

import style from'./style.module.css';
import {Routes, Route} from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import { jwtDecode } from 'jwt-decode';

import { useState } from 'react';

import SignUp from './SignUp';
import AdminRegisterion from './AdminRegister';
import UserRegister from './UserRegister';
import AdminDashboaed from './AdminDashboaed';
import AddService from './AddService';
import EditService from './EditService';

// import Quiz from '../Quiz';
// // import { StudentContextProvider  } from './../../../crud-app-master/src/context/StudentContext';
// // import StudentDetails from './../../../crud-app-master/src/components/Dashboard/StudentDetails';
// import Quiz from './../Quiz';


function App() {
  const [userData, setUserData] = useState(null)
  function handleUserData (){
   let encodedToken= localStorage.getItem('userToken');
   let decodedToken = jwtDecode(encodedToken);
   if (!encodedToken) {
    setUserData(null)
    } else {
      setUserData(decodedToken)
    };
  };
  
  return (
   <>
   
<div className={style.secBack}>
   <Routes>
   
     <Route path="/" element={<SignUp />}/>
     <Route path="/adminregisterion" element={<AdminRegisterion />}/>
     <Route path="/userRegister" element={<UserRegister handleUserData={handleUserData}/>}/>
     <Route path="/signin/adminDashboard" element={<AdminDashboaed />}/>
     <Route path="/editService/:id" element={<EditService />}/>
     
     <Route path="/addService" element={<AddService/>}/>
     <Route path="/signin" element={<SignIn />}/>

   
     <Route path="/home" element={<Home/>} />
 
   </Routes>
  </div>
   </>
  );
}

export default App;
