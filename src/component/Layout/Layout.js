import React from 'react';
import './Layout.css';
import Menu from '../Navigator/Menu';

class Layout extends React.Component {
  render() {
    return (
      <div className='layout_container'>
        <Menu />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
