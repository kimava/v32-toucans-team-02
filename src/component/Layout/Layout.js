import React from 'react'
import './Layout.css'
import Header from '../Navigator/Header/Header'

import Intro from '../Intro/Intro'

class Layout extends React.Component{
    render(){
        return(
            <div> <Header logedIn={this.props.logedIn}/>
                <Intro/>
                
            </div>
               
             )
    }
}
export default Layout