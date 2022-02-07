// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG-1jKaDuooaLUzRddRjkqCsc-QnVCXUI",
  authDomain: "photowall-proj-react.firebaseapp.com",
  databaseURL: "https://photowall-proj-react-default-rtdb.firebaseio.com",
  projectId: "photowall-proj-react",
  storageBucket: "photowall-proj-react.appspot.com",
  messagingSenderId: "477236541021",
  appId: "1:477236541021:web:d6670336a78c32a76a3fb4",
  measurementId: "G-JXVYMHLM3B",
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
