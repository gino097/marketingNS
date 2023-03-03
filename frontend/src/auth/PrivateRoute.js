import React from 'react'
import {Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './index';


//private route, only show for authenticated users
const PrivateRoute = () => {
    const auth = isAuthenticated(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;