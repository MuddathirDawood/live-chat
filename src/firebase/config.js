import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAr0ovgkqjQhzDyPYcQAbQhI0aEDFQzW-8",
    authDomain: "md-vue-firebase.firebaseapp.com",
    projectId: "md-vue-firebase",
    storageBucket: "md-vue-firebase.appspot.com",
    messagingSenderId: "460842892356",
    appId: "1:460842892356:web:28cb216fbe47ad6d50d011"
  };

//   INIT FIREBASE

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}