import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
const Router = () => {
    return useRoutes([
        {
            path: "./",
            element: <MainLayout />,
        },
        {
            path: "./",
            element: "",
        },
    ]

    )
}

export default Router