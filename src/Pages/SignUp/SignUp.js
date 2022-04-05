import React from 'react';
import Header from '../../component/Navigator/Header/Header';
import Login from '../../component/Login/Login';
import styles from './signup.module.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header logedIn={this.props.logedIn} />
        <div className={styles.loginBox}>
          <Login authService={this.props.authService} />
        </div>
      </div>
    );
  }
}
export default SignUp;
