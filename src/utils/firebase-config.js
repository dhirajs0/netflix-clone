import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
// Your Firebase configuration details (from the Firebase console)
    apiKey: "AIzaSyD6HMdPdxyGaHiL-47uiguptDirUcBGIsg",
    authDomain: "netflix-clone-a3c54.firebaseapp.com",
    projectId: "netflix-clone-a3c54",
    storageBucket: "netflix-clone-a3c54.appspot.com",
    messagingSenderId: "870063954312",
    appId: "1:870063954312:web:8d87a69ac14ffb2572823d",
    measurementId: "G-1P6CQH374M"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
