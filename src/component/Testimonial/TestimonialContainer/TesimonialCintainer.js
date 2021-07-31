import React from 'react'
import Testimonial from '../Testomial'
import './TestimonialContainer.css'
import img1 from '../../../Assets/profileImg1.jpg'
import img2 from '../../../Assets/profileImg2.jpg'
import img3 from '../../../Assets/profileImg3.jpg'


class TestiomnialContainer extends React.Component {
    render(){
        return(
            < div className='container'>
                <Testimonial  imgUrl={img1}/>
                <Testimonial  imgUrl={img2}/>
                <Testimonial  imgUrl={img3}/>
            </div>
        )
    }
}
export default TestiomnialContainer