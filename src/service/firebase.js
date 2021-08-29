import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const firebaseDatabase = firebaseApp.database();
export const firebaseStorage = firebase.storage();