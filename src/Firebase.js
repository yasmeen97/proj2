import firebase from 'firebase';


var config ={

  
    apiKey: "AIzaSyD8YEaV2OvwSL-51tAzcvD9JtQj-7jAwkI",
    authDomain: "myproject-6ecef.firebaseapp.com",
    databaseURL: "https://myproject-6ecef.firebaseio.com",
    projectId: "myproject-6ecef",
    storageBucket: "myproject-6ecef.appspot.com",

  };

//firebase.initializeApp(config);
const Firebase =firebase.initializeApp(config);
export default Firebase;


/*
firebaseObj = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export default firebaseObj*/