import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChange) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  getStatus(setUid) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      } else {
        setUid(null);
      }
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`unknown provider: ${providerName}`);
    }
  }
}

export default AuthService;
