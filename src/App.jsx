import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'

import "aos/dist/aos.css";

import About from './component/about/About';
import './App.css'
import Cars from './component/cars/Cars';
import { Outlet } from 'react-router-dom';






export default function App() {
  return (
    <>
      
      <Outlet/>
   

   
    </>
  )
}

