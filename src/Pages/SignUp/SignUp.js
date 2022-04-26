import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import Login from '../../component/Login/Login';
import styles from './signup.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (userId) {
      navigate('/search');
    }
  }, [userId]);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <Login />
      </div>
    </div>
  );
};

export default SignUp;
