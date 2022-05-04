import React, { useContext } from 'react';
import styles from './login.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authService } = useContext(AuthContext);

  const from = location.state?.from?.pathname || '/';

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(navigate(from, { replace: true }));
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
