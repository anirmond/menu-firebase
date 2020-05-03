var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyD2HDmDiQaPdbmcEcrBD_snISVBGHrrDXc",
    authDomain: "menucard-822fb.firebaseapp.com",
    databaseURL: "https://menucard-822fb.firebaseio.com",
    projectId: "menucard-822fb",
    storageBucket: "menucard-822fb.appspot.com",
    messagingSenderId: "673375843651",
    appId: "1:673375843651:web:953fe00062ff321790ebf6",
    measurementId: "G-T26G9MS41R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  module.exports = firebase.database().ref("Eatery");