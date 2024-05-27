import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import GluGLu from './GluGLu.jsx'

const paginas = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/gluglu/:id', element: <GluGLu /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={paginas}></RouterProvider>,
)
