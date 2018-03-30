import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password);

//sign In 
export const doSignInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email , password);

//Sign Out 
export const doSignOut = () => 
    auth.signOut();

//password reset 
export const doPasswordReset = (email) => 
    auth.sendPasswordResetEmail(email);

//passowrd Change
export const doPasswordUpdate = (password) => 
    auth.currentUser.updatePassword(password);

    