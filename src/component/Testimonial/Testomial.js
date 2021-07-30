import React from 'react'
import './Testomonial.css'
import profileImg from '../../Assets/profileImg1.jpg'
class Testomonial extends React.Component{
render(){
    return (
        <div className="testimonial_container">
           <div>
              <img className="testimonial_container__img" alt='profile' src={profileImg}/>
              <h3 className="testimonial_container__h3" alt="experince">My experince</h3>
           </div>
           
            <p>this is my experince about this site . I like it very much and I try to use it every day . </p>
            
        </div>
    )
}
}
export default Testomonial