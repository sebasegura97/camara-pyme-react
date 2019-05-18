
import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBOa-0CTH9NTaoiZMRC_u5m3In5FeX2F0o",
    authDomain: "camara-pymes.firebaseapp.com",
    databaseURL: "https://camara-pymes.firebaseio.com",
    projectId: "camara-pymes",
    storageBucket: "camara-pymes.appspot.com",
    messagingSenderId: "915264541464"
};
const Firebase = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default Firebase;
