import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyASGt-sltbrR93WPzwlF1iF6wRzAiGEVUo",
    authDomain: "pivonkabeauty-11ff7.firebaseapp.com",
    projectId: "pivonkabeauty-11ff7",
    storageBucket: "pivonkabeauty-11ff7.appspot.com",
    messagingSenderId: "1022388793495",
    appId: "1:1022388793495:web:a38f4415ef1ef03b1d39d2",
    measurementId: "G-T2MC8EZKSV"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };