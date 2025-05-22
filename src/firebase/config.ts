import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAeQoP5bZaS-VP0yHKRVvbAwZRMriKoLXY",
  authDomain: "cruise-ship-cursor.firebaseapp.com",
  projectId: "cruise-ship-cursor",
  storageBucket: "cruise-ship-cursor.firebasestorage.app",
  messagingSenderId: "965810170664",
  appId: "1:965810170664:web:fa8893e0085f123d037e1d",
  measurementId: "G-RVK664DH2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Set persistence to LOCAL to maintain user session
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Auth persistence error:", error);
});

// Enable offline persistence for Firestore
enableIndexedDbPersistence(db).catch((error) => {
  console.error("Firestore persistence error:", error);
});

// Initialize analytics only if supported
export const analytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

export default app;