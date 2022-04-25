import React, { useContext, useEffect } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';

const Login = () => {
  const navigate = useNavigate();
  const { authService } = useContext(AuthContext);

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(navigate('/search'));
  };

  return (
    <section className={styles.login}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
