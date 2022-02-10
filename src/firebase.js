import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDobzh1feENvMUkCytwA2YTGDsGn1zoOEA",
    authDomain: "carlos-portfolio-39fb6.firebaseapp.com",
    projectId: "carlos-portfolio-39fb6",
    storageBucket: "carlos-portfolio-39fb6.appspot.com",
    messagingSenderId: "414706837405",
    appId: "1:414706837405:web:7a933b7f1b257b6f26f174"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // connects everything to firebase
const db = firebaseApp.firestore(); // access to database
const auth = firebase.auth();       // access to authentication

export { db, auth };                // need access to these elsewhere