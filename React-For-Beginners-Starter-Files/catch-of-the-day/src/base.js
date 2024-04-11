import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChWnB6Fr6ucvFBrV9Vh8cZ5W_NfQZBlZI",
    authDomain: "catch-of-the-day-gustavo-2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-gustavo-2-default-rtdb.firebaseio.com",
  })

const base = Rebase.createClass(firebaseApp.database())

// This is a name export
export { firebaseApp }

// this is a default export
export default base