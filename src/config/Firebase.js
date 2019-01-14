import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC66cCHp_RxYXhSQi0-iaiawSm8PiHZLzU",
    authDomain: "site-document.firebaseapp.com",
    databaseURL: "https://site-document.firebaseio.com",
    projectId: "site-document",
    storageBucket: "site-document.appspot.com",
    messagingSenderId: "145269404106"
  };

  const app = firebase.initializeApp(config);

  const db = app.firestore();

  export default db;