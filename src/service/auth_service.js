import { firebaseAuth, githubProvider, googleProvider } from './firebase';
import { useHistory } from "react-router-dom";
class AuthService  {

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider)
  }
 
  logout() {
   firebaseAuth.signOut()
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