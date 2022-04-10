import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Navigator/Header/Header';
import Profile from '../../component/Profile/Profile';
import { firebaseDatabase } from '../../service/firebase';
import { useNavigate } from 'react-router';

const ProfilePage = (props) => {
  const [message, setMessage] = useState(null);
  console.log('profilePage', props.loggedIn);

  let navigate = useNavigate();
  if (!props.loggedIn) {
    navigate.push('/');
  }
  const submitedFormHandler = (formData) => {
    const profileData = {
      uid: formData.uid,
      name: formData.name,
      lastName: formData.lastName,
      bookGenre: formData.bookGenre,
      profileImg: formData.profileImg,
    };
    firebaseDatabase
      .ref('users/' + profileData.uid)
      .set(profileData, (error) => {
        if (error) {
          setMessage("Your profile couldn't be Updated  ");
        } else {
          setMessage('Your profile Updated sucessfuly ');
        }
      });
  };

  return (
    <>
      {/* if(props.loggedIn==false){
    
        <Redirect to='/' />
      } */}
      <Layout>
        <Header logedIn={props.loggedIn} authService={props.authService} />
        <h2>Profile</h2>
        <Profile submit={submitedFormHandler} uid={props.uid} />
        <p style={{ color: 'gray', textAlign: 'center' }}>{message}</p>
      </Layout>
    </>
  );
};
export default ProfilePage;
