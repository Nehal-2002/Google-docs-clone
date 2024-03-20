import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

let provider = new GoogleAuthProvider();

async function loginWithGoogle() {
  await signInWithPopup(auth, provider).then((response) => {
    console.log(`user emaill verified status = ${response.user.emailVerified}`);
  });
}

function useAuthCheck() {
  const [isAuth,setIsAuth] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if(response){
        setIsAuth(true);
        setUserPhotoURL(response.photoURL);
      }
    });
  }, []);

  return {isAuth,userPhotoURL}
}

const logOut = () => {
  signOut(auth);
}

export { loginWithGoogle, useAuthCheck,logOut };
