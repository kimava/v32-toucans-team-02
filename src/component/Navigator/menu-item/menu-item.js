import React from 'react';
import './menu-item.css';
import { Link } from 'react-router-dom';

class MenuItem extends React.Component {
  /* clickHandler=(link)=>{
    
    console.log(link)
  } */

  render() {
    return (
      <li className='menu_item'>
        <Link  onClick={this.props.click} to={this.props.link}>{this.props.children}</Link>
      </li>
    );
  }
}
export default MenuItem;
