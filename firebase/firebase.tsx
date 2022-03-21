// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "CHECK FIREBASE CREDENTIALS DOC",
  authDomain: "cs499-senior-design.firebaseapp.com",
  projectId: "cs499-senior-design",
  storageBucket: "cs499-senior-design.appspot.com",
  messagingSenderId: "CHECK FIREBASE CREDENTIALS DOC",
  appId: "CHECK FIREBASE CREDENTIALS DOC",
  measurementId: "G-Z5QXVJ8Z4Q"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;