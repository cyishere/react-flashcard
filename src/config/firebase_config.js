/**
 * PLEASE change this file's name to `firebase.js`
 */

import firebase from "firebase/app";
import "firebase/database";

/**
 * Fill these properties' values with your own firebase infos
 */
const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

export const database = firebaseApp.database().ref("cards");
