//firebase setup
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAK98-Z-JcoidAyjvjlaI4qvTobL5V06os",
  authDomain: "hackathon-8fa65.firebaseapp.com",
  projectId: "hackathon-8fa65",
  storageBucket: "hackathon-8fa65.appspot.com",
  messagingSenderId: "468134804825",
  appId: "1:468134804825:web:a6ad2224cbbc425de0e048",
};

const App = firebase.initializeApp(firebaseConfig);

export default App;
