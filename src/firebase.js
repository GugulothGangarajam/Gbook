import firebase from "firebase";
import { development as environment } from "./environment";
const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initalizing the app and connecting the frontend with backend
const db = firebaseApp.firestore(); //realtime db
const auth = firebase.auth(); //for login or signin
const provider = new firebase.auth.GoogleAuthProvider(); //signin into the app using multiple authentications providers

export { auth, provider };
export default db;
