// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKLF1V1lLHoi7BtOo7K0Du8gU1n9Iw-As",
  authDomain: "anime-catalog-96478.firebaseapp.com",
  projectId: "anime-catalog-96478",
  storageBucket: "anime-catalog-96478.appspot.com",
  messagingSenderId: "383883838126",
  appId: "1:383883838126:web:4000bbcbe231c5d56ea33f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
