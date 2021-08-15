import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBm8OhACjzP97JBgiHlnTnWP5TjfW7g36g",
    authDomain: "reactmain-d7740.firebaseapp.com",
    databaseURL: "https://reactmain-d7740-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reactmain-d7740",
    storageBucket: "reactmain-d7740.appspot.com",
    messagingSenderId: "783326950185",
    appId: "1:783326950185:web:eef7f1ef0ee9ad75b5fd38"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage()
  const projectFireStore = firebase.firestore()
  const timestamp = firebase.firestore.FieldVAlue.timestamp
  export {projectStorage , projectFireStore , timestamp}