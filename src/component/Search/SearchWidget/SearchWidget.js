import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchWidget = ({ userId, cardRepo, list }) => {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setClose(false);
    document.body.style.overflow = 'unset';
  };

  const handleMove = () => {
    navigate.push('/MyList');
  };

  return (
    <div>
      {close && (
        <div className='popUp' onClick={handleClose}>
          <button className='popUp_close'>
            <i className='fas fa-times'></i>
          </button>
          <p className='popUp_comment'>we saved it to your list! 🎉</p>
          <div className='popUp_selector'>
            <button className='popUp_btn popUp_stay' onClick={handleClose}>
              keep searching
            </button>
            <button className='popUp_btn popUp_move' onClick={handleMove}>
              go to my list
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchWidget;
