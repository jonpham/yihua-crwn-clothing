import { getDoc } from '../dbUtils';

const USERS_DOC_PATH = 'users';

export const getUserRefById = async (userId) => {
  return getDoc(`${USERS_DOC_PATH}/${userId}`);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await getUserRefById(userAuth.uid);
  const snapshot = await userRef.get();
  
  if(!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.error('Error creating UserProfile: ', e.message);
    }
  };

  return userRef;
};