import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth, googleAuthProvider } from './utils';

export const loginUser = () => {
  firebaseAuth;

  signInWithPopup(firebaseAuth, googleAuthProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential?.accessToken;
      const user = result.user;

      console.log(token, user);
    })
    .catch((error: any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage, email);
      // ...
    });
};
