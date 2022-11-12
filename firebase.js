import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBu1ljHR-Y5e8aW49BisJ4gaRmZhMOa3og",
  authDomain: "insta-2-0-94950.firebaseapp.com",
  projectId: "insta-2-0-94950",
  storageBucket: "insta-2-0-94950.appspot.com",
  messagingSenderId: "359906956729",
  appId: "1:359906956729:web:9cceb64554be8f74741268",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
