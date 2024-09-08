import React, { useRef } from 'react';
import './Testimonials.css'


import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import student1 from '../../assets/student1.png'
import student2 from '../../assets/student2.png'
import student3 from '../../assets/student3.png'
import student4 from '../../assets/student4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;


    const slideForward = ()=>{
        if(tx > -50){
          tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=>{
        if (tx < 0) {
            tx += 25;  // Adjust this based on how much you want to slide back
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
  return (
    <div className='testimonials'>
        <img src={back_icon} alt="" className='back-btn' onClick= {slideForward}/>
        <img src={next_icon} alt="" className='next-btn' onClick= {slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={student1} alt="" />
                            <div>
                                <h3>Aisha Khan</h3>
                                <span>LearnMate, Hyd</span>
                            </div>
                        </div>
                        <p>The SQE course offered practical insights into software testing and quality assurance. Real-world examples made complex concepts easy to grasp. Highly recommend for anyone in software quality!</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={student2} alt="" />
                            <div>
                                <h3>Fatima Ali</h3>
                                <span>LearnMate, Karachi</span>
                            </div>
                        </div>
                        <p>The HCI course was engaging and informative. It emphasized user-centered design and usability, which are crucial for effective UI development. Highly valuable for understanding user interactions.</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={student3} alt="" />
                            <div>
                                <h3>Zainab Tariq</h3>
                                <span>LearnMate, Islamabad</span>
                            </div>
                        </div>
                        <p>The Computer Networks course was thorough and well-structured. It covered basic to advanced networking topics with useful hands-on labs. Great preparation for tackling network challenges!</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={student4} alt="" />
                            <div>
                                <h3>Arif Khan</h3>
                                <span>LearnMate, Karachi</span>
                            </div>
                        </div>
                        <p>This DSA course made challenging topics like trees and dynamic programming approachable. Clear explanations and coding exercises built my confidence. A must-take for mastering algorithms!</p>

                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials