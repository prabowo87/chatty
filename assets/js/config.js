// Initialize Firebase
var config = {
    apiKey: "AIzaSyCYm6MMpmsQ6gPPDgKFiRAgz671H6ORInU",
    authDomain: "chatty-54759.firebaseapp.com",
    databaseURL: "https://chatty-54759.firebaseio.com",
    projectId: "chatty-54759",
    storageBucket: "chatty-54759.appspot.com",
    messagingSenderId: "1019472315884"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var loading = '<i class="fa fa-spinner rotating"></i>';
var defaultAvatar = "assets/images/avatar.png";