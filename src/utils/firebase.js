import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3GhFaefHcOlVbOokHhNTSmHNoVqtxI8E",
    authDomain: "fasfood-d0db7.firebaseapp.com",
    projectId: "fasfood-d0db7",
    storageBucket: "fasfood-d0db7.appspot.com",
    messagingSenderId: "863107844595",
    appId: "1:863107844595:web:d8ca471d1cc030f6576a86"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);