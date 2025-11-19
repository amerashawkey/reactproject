import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";

import "aos/dist/aos.css";
import car from '../../assets/car 2 1-DriDdkj5.png'
import style from './home.module.css'

export default function Home() {
  useEffect(() => {
    
  AOS.init({
     duration: 3000,     
    easing: "ease-out-back",
    once: true,
  });
 

}, []);

  return (
    <>
    
    <section>

   <div className="row ">
    <div className="container-fluid d-flex justify-content-between">
       <div className={`${style.discrip} col-md-4  text-center `}>
        <h1 className={`${style.h1}`} >Find, book and <br/> rent a car</h1>
        <span  className={`${style.span}`}>Easily</span>
        <p>Get a car wherever and whenever you<br/> need it with you IOS and Android device.</p>
      </div>
      <div className="photo"  data-aos="zoom-top-right"
   >
        <img src={car} alt="car"  className='col-4 w-100  '/>
      </div>
    </div>

   </div>

    </section>
    </>
  )
}
