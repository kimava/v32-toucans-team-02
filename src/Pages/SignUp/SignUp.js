import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import Layout from '../../component/Layout/Layout';
import Login from '../../component/Login/Login';
import styles from './signup.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useContext(AuthContext);

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (userId) {
      navigate(from, { replace: true });
    }
  }, [userId]);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <Login />
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
