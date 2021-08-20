import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj2br2VaP2mDdlvQhHH-cd0lStByNoSPk",
  authDomain: "booking-app-ns.firebaseapp.com",
  projectId: "booking-app-ns",
  storageBucket: "booking-app-ns.appspot.com",
  messagingSenderId: "175438063043",
  appId: "1:175438063043:web:dd1018344e6614c9884976",
  measurementId: "G-Q9WGYJTEEJ"
};

const app = firebase.default.initializeApp(firebaseConfig);

export default app;
