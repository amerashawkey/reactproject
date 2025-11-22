import React from 'react'
import photo from '../../assets/12345.jpg'
import photo1 from '../../assets/12.jpg'
import photo2 from '../../assets/13.jpg'
import photo3 from '../../assets/14.jpg'
import photo4 from '../../assets/16.jpg'
import style from './work.module.css'

export default function Work() {
  return (
  <>
  <div>
     <div className={style.button}>
            <button className={style.butt}>HOW IT WORK</button>
     </div>
     <h3 className='text-center'>Rent With Following 3 Working Steps</h3>
    <div className="d-flex justify-content-center align-items-center">
           <div className='text-center px-4 mx-4'>
            <img src={photo} className='w-50 h-auto' />
            <h4 className='my-2'>Choose location</h4>
            <p className='text-center'>Choose your and find your best car</p>
        
        </div> 
            
           <div className=' text-center px-4 mx-4 '>
        
            <img src={photo} className='w-50' />
           
            <h4 className='my-2'>Choose location</h4>
            <p className='text-center'>Choose your and find your best car</p>
            
        </div>
          <div className='text-center px-4 mx-4' >
            <img src={photo} className='w-50'/>
            <h4 className='my-2'>Choose location</h4>
            <p className='text-center'>Choose your and find your best car</p>
        </div>
    </div>
   



    <div className="container ">
<marquee class="GeneratedMarquee " direction="left" scrollamount="23" behavior="scroll">
  <div className="row justify-content-between align-items-center text-center">
    
    <div className="col-auto">
      <img src={photo1} className={style.photo5} />
    </div>

    <div className="col-auto">
      <img  src={photo2} className={style.photo5} />
    </div>

    <div className="col-auto">
      <img  src={photo3}  className={style.photo5} />
    </div>

    <div className="col-auto">
      <img  src={photo4}  className={style.photo5} />
    </div>

  

  </div>


</marquee>
</div>
  
  </div>


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}
