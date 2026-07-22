import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Database setup-kaga

// Neenga copy panna config-ah inga paste pannunga
const firebaseConfig = {
  apiKey: "AIzaSyDZNZP_gVBXZs1xDvKKdfVZ7SWfacvM-5A",
  authDomain: "smv-insight.firebaseapp.com",
  projectId: "smv-insight",
  storageBucket: "smv-insight.firebasestorage.app",
  messagingSenderId: "290153757190",
  appId: "1:290153757190:web:8ad595d9a20e001135a187",
  measurementId: "G-F1HMSCJXBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database-ah export pannunga
export const db = getFirestore(app);