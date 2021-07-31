import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import Intro from '../../Intro/Intro'
import TestiomnialContainer from '../../Testimonial/TestimonialContainer/TesimonialCintainer'

class Home extends React.Component{
    render(){
        return(
            <Layout>
                <Header logedIn={this.props.logedIn}/>
                <Intro/>
                <TestiomnialContainer />
            </Layout>
        )
    }
}
export default Home 