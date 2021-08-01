import React from 'react'
import Layout from '../../Layout/Layout'
import Header from '../../Navigator/Header/Header'
import TestiomnialContainer from '../../Testimonial/TestimonialContainer/TesimonialCintainer'

class Search extends React.Component{
    render(){
        return(
            <Layout>
                <Header logedIn={true}/>
            </Layout>
        )
    }
}
export default Search 