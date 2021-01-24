  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/database'
  import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAf0JNoXyWRstX_tubjtmSYjXqEbxhRpBE",
 authDomain: "project-osha.firebaseapp.com",
 projectId: "project-osha",
 storageBucket: "project-osha.appspot.com",
 messagingSenderId: "1066816141159",
 appId: "1:1066816141159:web:6feb73429e0d359dde21c2",
 measurementId: "G-T3DF0D67DG"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;