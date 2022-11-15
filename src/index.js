import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route,} from "react-router-dom";

import Countries from './pages/Countries/Index'
import Todo from './pages/Todo/Index'
import Home from './pages/Index'

const router = createBrowserRouter([

    
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/countries",
        element: <Countries />,
    },
    {
        path: "/todo",
        element: <Todo />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
