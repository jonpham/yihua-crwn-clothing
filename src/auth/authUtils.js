import { auth, googleAuthProvider } from "../firebase/firebaseUtils";

export const createUserWithEmailAndPassword = (...args) => auth.createUserWithEmailAndPassword(...args)

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export const signInWithEmailAndPassword = (...args) => auth.signInWithEmailAndPassword(...args);

export const signOutUser = () => auth.signOut();

export const onAuthStateChange = (cbFn) => auth.onAuthStateChanged(cbFn);
