var firebase = require('firebase')
var config = {
  apiKey: 'AIzaSyCNIjlw4gVqGQgSr6pvcHqmWK4eA1KnTyk',
  authDomain: 'vue-firebase-e123d.firebaseapp.com',
  databaseURL: 'https://vue-firebase-e123d.firebaseio.com',
  storageBucket: 'vue-firebase-e123d.appspot.com',
  messagingSenderId: '121034532316'
}

var firebaseApp = firebase.initializeApp(config)
module.exports.db = firebaseApp.database()
