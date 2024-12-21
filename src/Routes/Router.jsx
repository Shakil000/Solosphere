import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import AddJobs from '../components/AddJobs';

const Router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
        ]
    },
    {
        path:'/addjobs',
        element: <AddJobs></AddJobs>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element:<Login></Login>
            },
            {
                path: '/auth/register',
                element:<Register></Register>
            },
        ]
    }

])

export default Router;