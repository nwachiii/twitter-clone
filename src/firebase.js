import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpUKEcRrkgS0sG2lfsbvShFOKw5Vfo5ck",
  authDomain: "twitter-clone-d1571.firebaseapp.com",
  projectId: "twitter-clone-d1571",
  storageBucket: "twitter-clone-d1571.appspot.com",
  messagingSenderId: "1075812959113",
  appId: "1:1075812959113:web:9a27a7948f92c10d4f1758",
  measurementId: "G-X4LYLMRD2R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
