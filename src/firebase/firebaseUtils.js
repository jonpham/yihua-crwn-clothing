import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import firebaseConfig from './firebaseConfig.json';
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export { 
  auth,
  firestore,
  googleAuthProvider
};

export default firebase;
