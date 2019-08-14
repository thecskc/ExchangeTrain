import * as firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';



var firebaseConfig = {
    apiKey: "AIzaSyBqLlbDoL_fDIVin_kmgNHAwbn-CZazuQU",
    authDomain: "exchange-231906.firebaseapp.com",
    databaseURL: "https://exchange-231906.firebaseio.com",
    projectId: "exchange-231906",
    storageBucket: "exchange-231906.appspot.com",
    messagingSenderId: "349987543370",
    appId: "1:349987543370:web:2fb377e2c8778ec1"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();



export default firebase;