// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-iQ9pGuwcoYjq_6ScezTBupvYB6x2vT0",
  authDomain: "linkedin-clone-39b0f.firebaseapp.com",
  projectId: "linkedin-clone-39b0f",
  storageBucket: "linkedin-clone-39b0f.appspot.com",
  messagingSenderId: "296286312347",
  appId: "1:296286312347:web:485606254d1ccd3194b33e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
