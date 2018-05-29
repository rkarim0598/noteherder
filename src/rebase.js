import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAh-rT7wUtOOUUbw6fozxj7bZdRCy4TmPg",
    authDomain: "note-keeper-b8e53.firebaseapp.com",
    databaseURL: "https://note-keeper-b8e53.firebaseio.com",
    projectId: "note-keeper-b8e53",
    // storageBucket: "note-keeper-b8e53.appspot.com",
    // messagingSenderId: "615843625551"
  })
//   firebase.initializeApp(config);

const db = firebase.database(app)
const base = Rebase.createClass(db)

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default base