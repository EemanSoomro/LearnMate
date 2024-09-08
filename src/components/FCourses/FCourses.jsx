import React from 'react'
import './FCourses.css'
import Course1 from '../../assets/FCourses1.png'
import Course2 from '../../assets/FCourses2.png'
import Course3 from '../../assets/FCourses3.png'
import Course_icon1 from '../../assets/icon1.png'
import Course_icon2 from '../../assets/icon2.png'
import Course_icon3 from '../../assets/icon3.png'


const FCourses = () => {
  return (
    <div className='FCourses'>
        <div className="course">
            <img src={Course1} alt="" />
            <div className="caption">
               <img src={Course_icon1} alt="" />
               <p>Software Quality Engineering</p>
            </div>
         </div>
         <div className="course">
            <img src={Course2} alt="" />
            <div className="caption">
               
               <img src={Course_icon2} alt="" />
               <p>Data Structures & Algorithms</p>
            </div>
         </div>
         <div className="course">
            <img src={Course3} alt="" />
            <div className="caption">
               <img src={Course_icon3} alt="" />
               <p>Computer Networks</p>
            </div>
         </div>

        </div>
  )
}

export default FCourses