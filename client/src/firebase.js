// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamstate-75076.firebaseapp.com",
  projectId: "dreamstate-75076",
  storageBucket: "dreamstate-75076.appspot.com",
  messagingSenderId: "870737462897",
  appId: "1:870737462897:web:8dccb6a622096ceb9f7dd0",
  measurementId: "G-PJXJX28N03"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// Firebase Storage bucket rules
// allow read;
// allow write: if
// request.resource.size < 2 * 1024 * 1024 &&
// request.resource.contentType.matches('image/.*')