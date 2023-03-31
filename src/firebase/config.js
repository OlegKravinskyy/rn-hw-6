import AsyncStorage from "@react-native-async-storage/async-storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGBDsqiATDL4Qy4WcPJmwXq4KPKaGMqII",
  authDomain: "rn-hw-06.firebaseapp.com",
  projectId: "rn-hw-06",
  storageBucket: "rn-hw-06.appspot.com",
  messagingSenderId: "70724056432",
  appId: "1:70724056432:web:a7c018cfe8865d6784cbb5",
  measurementId: "G-TJ9CBKJ4ST",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
