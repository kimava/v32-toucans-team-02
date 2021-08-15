import React from 'react';
import './testimonial.css';
class Testomonial extends React.Component {
  render() {
    return (
      <div className='testimonial_container'>
        <img
          className='testimonial_container__img'
          alt='profile'
          src={this.props.imgUrl}
        />
        <h3 className='testimonial_container__name' alt='experince'>
          {this.props.name}
        </h3>
        <div className='divide'></div>
        <p className='testimonial_content'>
          Easy to find books and make my list. So much fun!
        </p>
      </div>
    );
  }
}
export default Testomonial;
