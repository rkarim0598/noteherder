import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

var app = {
    apiKey: "AIzaSyAh-rT7wUtOOUUbw6fozxj7bZdRCy4TmPg",
    authDomain: "note-keeper-b8e53.firebaseapp.com",
    databaseURL: "https://note-keeper-b8e53.firebaseio.com",
    projectId: "note-keeper-b8e53",
    // storageBucket: "note-keeper-b8e53.appspot.com",
    // messagingSenderId: "615843625551"
  };
//   firebase.initializeApp(config);

var db = firebase.database(app)
var base = Rebase.createClass(db)

export default base