import React from 'react';
import { firebaseAuth, githubProvider, googleProvider } from './firebase';
export const AuthContext = React.createContext({
  user: null,
});
class AuthService {
  state = {
    user: null,
  };
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider).then((result) => {
      this.setState({ user: result.user });
    });
  }

  logout() {
    firebaseAuth.signOut();
    this.setState({ user: null });
  }

  onAuthChange(onUserChange) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  getStatus(setUid) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
        setUid(null)
        console.log('logged out');
      }
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`unknown provider: ${providerName}`);
    }
  }
}

export default AuthService;
