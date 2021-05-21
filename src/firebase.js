import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  // measurementId: "G-DRVLJKWRWG",
// 
  // apiKey: 'AIzaSyA0shpzCw6J8ROy6ZpBSi1VEBXMitOmbF0',
  // authDomain: 'disney-plus-clone-1f953.firebaseapp.com',
  // projectId: 'disney-plus-clone-1f953',
  // storageBucket: 'disney-plus-clone-1f953.appspot.com',
  // messagingSenderId: '143581161448',
  // appId: '1:143581161448:web:e158856f0de80a095b665d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
