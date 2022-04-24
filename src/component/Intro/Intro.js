import React from 'react';
import { useNavigate } from 'react-router-dom';
import main from '../../Assets/main.png';
import './Intro.css';

const Intro = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  };

  return (
    <div className='intro_container'>
      <div className='intro'>
        <h1 className='intro_title'>
          the handiest way <br />
          to create your book log
        </h1>
        <p className='intro_content'>
          Make your own list of all the books <br />
          you want to read and you love. <br />
          Easily see what you've completed.
        </p>
        <button className='intro_button' onClick={goToLogin}>
          Get Started
        </button>
      </div>

      <img src={main} alt='main' className='intro_img' />
    </div>
  );
};

export default Intro;
