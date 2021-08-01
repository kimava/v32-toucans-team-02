import React from 'react'
import './MenuItem.css'

class MenuItem extends React.Component{
    render(){

        return(
            <li className="menu_item">
                <a href={this.props.link}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}
export default MenuItem