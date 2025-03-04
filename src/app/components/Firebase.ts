// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "TA_CLE_API",
//   authDomain: "TON_PROJET.firebaseapp.com",
//   projectId: "TON_PROJET",
//   storageBucket: "TON_PROJET.appspot.com",
//   messagingSenderId: "TON_ID",
//   appId: "TON_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

 import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsLcIrDsm9uAOsEsp_ZKuLR4bdGhNduVg",
  authDomain: "machblog-b1c6b.firebaseapp.com",
  projectId: "machblog-b1c6b",
  storageBucket: "machblog-b1c6b.firebasestorage.app",
  messagingSenderId: "893320856441",
  appId: "1:893320856441:web:73cb1d6c0e1dba4dd725a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
