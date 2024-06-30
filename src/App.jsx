import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'


import Header from './Components/Header'


export default function App() {
  return (
 <>
<Header />


 {/* <Routes>
    <Route path="/" element={Home} />
    <Route path="/course" element={Course} />
    <Route path="/blog" element={Blogs} />
    <Route path="/about" element={AboutUs} />

 </Routes> */}
 </>
  )
}
