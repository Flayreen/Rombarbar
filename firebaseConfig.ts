import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlpgQigntJlHm7_PQEjsSzcnnJSpNWFww",
    authDomain: "rombarbar-b8a40.firebaseapp.com",
    projectId: "rombarbar-b8a40",
    storageBucket: "rombarbar-b8a40.firebasestorage.app",
    messagingSenderId: "654014313607",
    appId: "1:654014313607:web:b5f29751c0fdca7f05b422"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

