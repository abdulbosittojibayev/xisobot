import React from 'react'
import { useRoutes } from 'react-router-dom';
import { Home, Error, Login, Dashboard, Mentors } from './pages'

export const Routes = () => {
    const Route = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/dashboard", element: <Dashboard /> },
                { path: "/login", element: <Login /> },
                { path: "/Mentors", element: <Mentors /> },
                { path: "/*", element: <Error /> },
            ],
        },
    ];
    return useRoutes((Route))
}
