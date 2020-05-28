import { auth, googleAuthProvider } from "../firebase/firebaseUtils";

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export const signOutUser = () => auth.signOut();

export const onAuthStateChange = (cbFn) => auth.onAuthStateChanged(cbFn);