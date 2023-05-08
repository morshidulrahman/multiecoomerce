import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCg360Q0DEI3-HO5LL7IJEYU8ectEPc_Co",
  authDomain: "multimart-66b8f.firebaseapp.com",
  projectId: "multimart-66b8f",
  storageBucket: "multimart-66b8f.appspot.com",
  messagingSenderId: "1025908902403",
  appId: "1:1025908902403:web:9ae0eff3bf5c1a2082dc36",

  // vite consfig key

  // apiKey: import.meta.env.VITE_APP_API_KEY,
  // authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_APP_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_APP_MESSAGINGIN_SENDER_ID,
  // appId: import.meta.env.VITE_APP_API_ID,
};

// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
