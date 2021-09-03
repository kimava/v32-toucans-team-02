import React from 'react';
import Menu from '../Menu/Menu';

import './Header.css';
import logo from '../../../Assets/book.png';

class Header extends React.Component {
  render() {
    return (
      <header className='header'  authservice={this.props.authservice}>
        {this.props.onLogout && (
          <button onClick={this.props.onLogout} className='logout'>
            Logout
          </button>
        )}
        <img src={logo} alt='Logo' className='header_logo' />

        <Menu logedIn={this.props.logedIn}  authservice={this.props.authservice}/>
      </header>
    );
  }
}
export default Header;
