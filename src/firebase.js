import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEZWQdQLUUoU4rZ8o46lgkz90ec1kd3QI",
  authDomain: "you-tube-clonee.firebaseapp.com",
  databaseURL: "https://you-tube-clonee.firebaseio.com",
  projectId: "you-tube-clonee",
  storageBucket: "you-tube-clonee.appspot.com",
  messagingSenderId: "471261369108",
  appId: "1:471261369108:web:1fae71e5855719df6aa801",
  measurementId: "G-TCB12WBYY9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
