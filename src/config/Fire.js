import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCV7vUBsGKTquabomuJ795iMtRAO1fqO2M",
    authDomain: "fir-login-9ff45.firebaseapp.com",
    databaseURL: "https://fir-login-9ff45.firebaseio.com",
    projectId: "fir-login-9ff45",
    storageBucket: "",
    messagingSenderId: "434872916659",
    appId: "1:434872916659:web:bba9679744d7b2ab"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;