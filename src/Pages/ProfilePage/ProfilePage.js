import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import { useNavigate } from 'react-router-dom';

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
  };

  return (
    <>
      {/* if(props.loggedIn==false){
    
        <Redirect to='/' />
      } */}
      <Layout>
        <h2>Profile</h2>
        <p style={{ color: 'gray', textAlign: 'center' }}>{message}</p>
      </Layout>
    </>
  );
};
export default ProfilePage;
