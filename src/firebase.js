import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp( {
    apiKey: "AIzaSyDKeEt8QPmqUwvBsXjy7OvOq_BN2r96Kfk",
    authDomain: "berminal-db.firebaseapp.com",
    databaseURL: "https://berminal-db.firebaseio.com",
    projectId: "berminal-db",
    storageBucket: "berminal-db.appspot.com",
    messagingSenderId: "648185595141",
    appId: "1:648185595141:web:50bf08c2d9f7d38981e36c",
    measurementId: "G-NF1STET7VC"
} );

export default app

