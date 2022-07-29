import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  deleteUser,
  reauthenticateWithCredential,
  reauthenticateWithPopup
} from "firebase/auth";

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

  getProvider(providerName) {
    const provider = providerName.toLowerCase().includes("google")
      ? "google"
      : "github";

    switch (provider) {
      case "google":
        return this.googleProvider;
      case "github":
        return this.githubProvider;
      default:
        throw new Error(`unknown provider: ${providerName}`);
    }
  }

  deleteAccount = async () => {
    const user = this.firebaseAuth.currentUser;
    const provider = this.getProvider(user.providerData[0].providerId);
    reauthenticateWithPopup(user, provider).then(() => {
      const currentUser = this.firebaseAuth.currentUser;
      deleteUser(currentUser)
        .then(() => {
          console.log("account deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
}

export default AuthService;
