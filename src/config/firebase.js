import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore}  from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBepPxT8Cqw9l2Nkg6jCV2elZAzTIe0ofQ",
  authDomain: "netflix-clone-e8fdc.firebaseapp.com",
  projectId: "netflix-clone-e8fdc",
  storageBucket: "netflix-clone-e8fdc.appspot.com",
  messagingSenderId: "241890814341",
  appId: "1:241890814341:web:4afe52c8bf7725b74dbcec",
  measurementId: "G-B6YXK05C9B"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
export const storage =getStorage(app);