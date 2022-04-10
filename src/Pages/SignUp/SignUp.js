import React from 'react';
import Login from '../../component/Login/Login';
import styles from './signup.module.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <Login authService={this.props.authService} />
        </div>
      </div>
    );
  }
}
export default SignUp;
