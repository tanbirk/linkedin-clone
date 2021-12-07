import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtauO1jKvLS8FmMFnZNMooXdkMQ6cgm5M",
    authDomain: "linkedin-clone-6e9bc.firebaseapp.com",
    projectId: "linkedin-clone-6e9bc",
    storageBucket: "linkedin-clone-6e9bc.appspot.com",
    messagingSenderId: "779909790928",
    appId: "1:779909790928:web:be2c6d954fcc9df1f3b2d5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }; 