import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY || "AIzaSyDbhjg6l2T7D3WKrhluhu8OzSE3dJrW6VQ",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN || "chat-app-5aa33.firebaseapp.com",
    projectId: process.env.REACT_APP_PID || "chat-app-5aa33",
    storageBucket: process.env.REACT_APP_SB || "chat-app-5aa33.appspot.com",
    messagingSenderId: process.env.REACT_APP_SID || "695817067603",
    appId: process.env.REACT_APP_APPID || "1:695817067603:web:45942353ee828664c7baa6"
}

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const messagesRef = firestore.collection('messages');
export const auth = firebase.auth();
export default firebase;