import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  projectId: "botuiapp",
  measurementId: "G-5VYK7WFJL9",
  authDomain: "botuiapp.firebaseapp.com",
  storageBucket: "botuiapp.appspot.com",
  apiKey: "AIzaSyCB6n_pJpEXTi6xt4jJu3F-kwYtAvpILKA",
  appId: "1:914574039315:web:364ee6ed875cbaa35022e6",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const functions = getFunctions(firebaseApp)
export const firestoreDB = getFirestore(firebaseApp)

if (typeof window !== "undefined") {
  getAnalytics(firebaseApp)
}
