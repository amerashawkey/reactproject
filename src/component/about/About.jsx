import React, { useEffect, useState } from 'react'
import style from'./about.module.css'
import axios from 'axios'
import car from '../../assets/car1.png'
// import car2 from '../../assets/car2.png'
// import car3 from '../../assets/car3.png'
// import car4 from '../../assets/car4.png'

export default function About() {
    const [cars, setCars] = useState([]);
   
    async function getcars() {
  try {
       const response = await axios.get("https://myfakeapi.com/api/cars/");
     
      console.log(response.cars);
    } catch (error) {
      console.log("Error loading API:", error);
    }

}

    useEffect(()=>{
        getcars()
    },[])
  


  return (
   <>
 
   <div className={`${style.search} my-5 `}>
  <div className={style.searchGroup}>
    <span className={style.icon}>
      <i className="fa-solid fa-location-dot"></i>
    </span>
    <input
      type="text"
      placeholder="Search By Name"
      className={style.searchInput}
    />
 
    <button type="button" className={`${style.searchBtn} `}>search</button>

  </div>
</div>
  <div className={`${style.parag}`}>
     <span>
        <p>POPULAR RENTAL DEALS</p>
     </span>
    
  
  <h3 >Most popular cars rental deals</h3>

  </div>
    <div className="container">
      <div className="row">
       
         {cars.map((item)=>{
            return <div  key={item.id} className='col-md-3 mt-3'>
              <div className={style.card}>
                  <img src={car}   alt={item.car} className={style.img}/>
                  <h4 >{item.car} {item.car_model}</h4>
                  <div className={style.rate}>
                     <i className="fa-solid fa-star"></i>
                     <p>2.8(1345 reviews)</p>

                  </div>
                  <div className={style.features}>
                    <p><i className="fa-solid fa-user"></i> 4 Passengers</p>
                    <p><i className="fa-solid fa-gear"></i> Air conditioning</p> 
                    <p><i className="fa-solid fa-calendar-days "></i>2021</p>
                    <p><i className="fa-solid fa-door-open"></i> 4 Doors</p>
                  </div>
                  <hr/>
                  <div className={style.price}>
                    <p>price</p>
                    <h5>{item.price}</h5>
                  </div>
                  <button type="button" className="btn btn-primary w-100">
                    View details →
                  </button>
            

              </div>

            </div>
          
         })}



       

      </div>

    </div>
    

  
   </>
  )
}
