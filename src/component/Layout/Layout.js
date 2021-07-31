import React from 'react'
import './Layout.css'

class Layout extends React.Component{
    render(){
        return(
            <div className="layout_container"> 
                     {this.props.children}
            </div>
               
             )
    }
}
export default Layout