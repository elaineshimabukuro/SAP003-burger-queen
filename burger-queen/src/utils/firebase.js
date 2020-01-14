import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs3InvJ6RjYNQ6vhGJHrn9a_QnClJv_BA",
  authDomain: "burger-queen-42d0e.firebaseapp.com",
  databaseURL: "https://burger-queen-42d0e.firebaseio.com",
  projectId: "burger-queen-42d0e",
  storageBucket: "burger-queen-42d0e.appspot.com",
  messagingSenderId: "71578555246",
  appId: "1:71578555246:web:8b51ed6592c5ed0308277f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const firebaseDatabase = firebase.database();