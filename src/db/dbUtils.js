import { firestore } from "../firebase/firebaseUtils";

export const getDoc = async (docPath) => await firestore.doc(docPath);
