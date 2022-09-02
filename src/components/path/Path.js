import React from 'react';
import {
    BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import Dashboard1 from '../dashboard/Dashboard1.js';
import Login1 from '../login/Login1.js';

function Path() {
    return (
        <div>
             <BrowserRouter>
    <Routes>
         <Route path='/'  element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login1/>} />
        <Route path ='/dashboard' element={<Dashboard1/>}/>
          
    </Routes>
  </BrowserRouter>
            
            
        </div>
    );
}

export default Path;