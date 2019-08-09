import config from "./config";

import firebase from "firebase/app";

const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(config);

export default firebaseApp;
