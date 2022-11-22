import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApN9bPvszgDlELuX5IXQSHxWnl4QWYIuw",
  authDomain: "crown-clothing-db-1b064.firebaseapp.com",
  projectId: "crown-clothing-db-1b064",
  storageBucket: "crown-clothing-db-1b064.appspot.com",
  messagingSenderId: "326043733387",
  appId: "1:326043733387:web:68e71fcf92aaca51e3f38e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
