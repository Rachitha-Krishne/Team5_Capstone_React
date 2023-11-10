import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelRegisterForm from './Components/HotelRegistrationForm';
import Home from './Components/Home';

function AppRouting() {
    return (
        <div>
             <BrowserRouter>
             <Routes>
                <Route path='/' element={<Home/>}></Route>
             <Route path='add-restaurant' element={<HotelRegisterForm/> } />
             </Routes>
             </BrowserRouter>
        </div>
    )
}

export default AppRouting;