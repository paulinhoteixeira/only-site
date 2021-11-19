import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Single from '../components/Single';
import Home from '../pages/Home';

const RouteSite = () => (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={ <Single /> } />
        <Route path='/home' element={ <Home /> } />
    </Routes>
    </BrowserRouter>
)

export default RouteSite;