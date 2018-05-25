import { firebase } from '@firebase/app';
import '@firebase/firestore';

const firebaseApp = firebase.initializeApp({
    // your firebase config goes here
});

export const db = firebaseApp.firestore();