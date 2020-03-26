import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_2n0hJGUQYz7Axn_I9DcabBVyLEU6IlA',
  authDomain: 'e-commerce-d8b2b.firebaseapp.com',
  databaseURL: 'https://e-commerce-d8b2b.firebaseio.com',
  projectId: 'e-commerce-d8b2b',
  storageBucket: 'e-commerce-d8b2b.appspot.com',
  messagingSenderId: '697073283988',
  appId: '1:697073283988:web:a57302f7b50abc2ab85581',
  measurementId: 'G-MJFPSFQ09B'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;
  const user = firestore.doc(`users/${userAuth.uid}`);
  const snopshot = await user.get();
  if (!snopshot.exists) {
    const { displayName, email } = userAuth;
    try {
      await user.set({
        displayName,
        email,
        createdAt: new Date(),
        ...data
      });
    } catch (error) {
      console.log('error :', error);
    }
  }
  return user;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
