import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW4TZkw0xjXdgIJIHUhbQIuht3ueCz57M",
    authDomain: "crwn-clothing-db-618ea.firebaseapp.com",
    projectId: "crwn-clothing-db-618ea",
    storageBucket: "crwn-clothing-db-618ea.appspot.com",
    messagingSenderId: "60790152659",
    appId: "1:60790152659:web:a5c2b0fa571964db0f2326"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid );
    //   console.log(userDocRef);
      const userSnapshot = await getDoc(userDocRef);
    //   console.log(userSnapshot);
      if(!userSnapshot.exists()){
          const {displayName, email } = userAuth;
          const createdAt = new Date();
          try{
            await setDoc(userDocRef, {displayName, email, createdAt});
          } 
          catch(err){
            console.log('error creating the user', err.mesage);
          }
      }
      return userDocRef;
  } 