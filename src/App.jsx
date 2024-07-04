// App.js
import React from 'react';
import './App.css';
import Home from './Pages/HomePage/Home';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
// ]);

export default function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Home/>
    </>
  );
}
