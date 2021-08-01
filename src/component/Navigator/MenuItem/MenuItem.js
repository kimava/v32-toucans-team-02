import React from 'react'
import './MenuItem.css'
import { Link } from 'react-router-dom'

class MenuItem extends React.Component{
    render(){
        return(
            <li className="menu_item">
                <Link to={this.props.link}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}
export default MenuItem