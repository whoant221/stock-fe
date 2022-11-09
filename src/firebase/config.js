import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
} from '@firebase/auth';
import { getStorage } from '@firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDcrP-IFRUilPYf4r_92JcQi142pDU8-SQ",
    authDomain: "stock-huflit.firebaseapp.com",
    projectId: "stock-huflit",
    storageBucket: "stock-huflit.appspot.com",
    messagingSenderId: "442371235372",
    appId: "1:442371235372:web:b0b2f9ee4b24e2c026fb89",
    measurementId: "G-G42FST2W2L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider(app);
const facebookProvider = new FacebookAuthProvider(app);
const githubAuthProvider = new GithubAuthProvider(app);

export { auth, googleProvider, facebookProvider, githubAuthProvider, storage };
export default db;
export const authentication = getAuth();