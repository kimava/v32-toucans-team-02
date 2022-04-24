import React from 'react';
import './PopUp.css';

const PopUp = ({ open, message, handleClose, children }) => {
  const onClick = () => {
    handleClose();
    // document.body.style.overflow = 'unset';
  };

  return (
    <div>
      {open && (
        <div className='popUp' onClick={onClick}>
          <button className='popUp_close'>
            <i className='fas fa-times'></i>
          </button>
          <p className='popUp_comment'>{message}</p>
          {children && <div className='popUp_children'>{children}</div>}
        </div>
      )}
    </div>
  );
};

export default PopUp;
