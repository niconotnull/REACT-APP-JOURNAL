import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA1nSWcbgMowbLbr4YKotpC6AAWrNaYDjs',
  authDomain: 'react-app-549ca.firebaseapp.com',
  projectId: 'react-app-549ca',
  storageBucket: 'react-app-549ca.appspot.com',
  messagingSenderId: '637247463397',
  appId: '1:637247463397:web:0b762701d91cf4ac46990c',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
