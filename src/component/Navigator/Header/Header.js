import React from 'react'
import Menu from '../Menu/Menu'

import './Header.css'
import logo from '../../../Assets/book.png'

class Header extends React.Component {
    render(){
        return(
            <header className="header">
                <img  src={logo} alt="Logo"  className='header_logo'/>
                <Menu logedIn={this.props.logedIn}/> 
            </header>
        )
    }
}
export default Header