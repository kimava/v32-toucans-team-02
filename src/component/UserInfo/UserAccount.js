import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth_context';
import PopUp from '../PopUp/PopUp';
import { SettingsDiv } from './UserAccountStyle';

const UserAccount = () => {
  const { authService } = useContext(AuthContext);
  const [popUpOpen, setPopUpOpen] = useState(false);

  const onBtnClick = () => {
    setPopUpOpen(true);
  };

  const onDelete = () => {
    authService.deleteAccount();
    setPopUpOpen(false);
  };

  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  return (
    <SettingsDiv>
      <h1>User Setting</h1>
      <h3>Delete Account</h3>
      <p>Permanently delete your account and all of your content</p>
      <span onClick={onBtnClick}>Delete Account</span>
      <PopUp
        open={popUpOpen}
        message={'Do you really wanna leave? 😢'}
        handleClose={handlePopUpClose}
      >
        <button className='popUp_children' onClick={onDelete}>
          Yes
        </button>
        <button className='popUp_children' onClick={handlePopUpClose}>
          No
        </button>
      </PopUp>
    </SettingsDiv>
  );
};

export default UserAccount;
