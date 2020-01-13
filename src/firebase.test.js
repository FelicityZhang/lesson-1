import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection( 'users' ).doc( qVT3KQ2rEzzeDjEIySmE ).collection( 'email' )