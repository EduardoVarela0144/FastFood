import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi-erqUBKlY9EA7jRjrQmO2kUgNKr1d5E",
  authDomain: "fastfood-76e32.firebaseapp.com",
  projectId: "fastfood-76e32",
  storageBucket: "fastfood-76e32.appspot.com",
  messagingSenderId: "676890511681",
  appId: "1:676890511681:web:417b7baf8b125cad2239c0"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);