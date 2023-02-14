import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgf-1nuFbNnox7J1lmyfZXEMC6WQx0etE",
  authDomain: "multimart-e7ecf.firebaseapp.com",
  projectId: "multimart-e7ecf",
  storageBucket: "multimart-e7ecf.appspot.com",
  messagingSenderId: "862968085869",
  appId: "1:862968085869:web:1fddec06b42f3fc5192e64",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
