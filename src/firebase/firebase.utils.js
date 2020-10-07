import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCPCzkhmr3sXeKHk4ltxpZsN__TaDY8LQ0",
  authDomain: "king-db-74d95.firebaseapp.com",
  databaseURL: "https://king-db-74d95.firebaseio.com",
  projectId: "king-db-74d95",
  storageBucket: "king-db-74d95.appspot.com",
  messagingSenderId: "691477189311",
  appId: "1:691477189311:web:e6d635b101e70c5bd16c0a",
  measurementId: "G-3070RW5B89"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
