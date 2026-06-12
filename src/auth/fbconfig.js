import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxJV1Zm8F0N5o7Rwvz3uUa-xCB4UR5JHE",
  authDomain: "linvexmcqs.firebaseapp.com",
  projectId: "linvexmcqs",
  storageBucket: "linvexmcqs.firebasestorage.app",
  messagingSenderId: "839287942131",
  appId: "1:839287942131:web:cb5a3e3c7c8478cc8c0086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
