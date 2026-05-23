import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAd5Jay18N7EWRj3ZGcR0F1IiuL1MsehHc",
  authDomain: "ayamgeprekbangbil.firebaseapp.com",
  databaseURL:
    "https://ayamgeprekbangbil-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ayamgeprekbangbil",
  storageBucket:
    "ayamgeprekbangbil.firebasestorage.app",
  messagingSenderId: "1076403781603",
  appId:
    "1:1076403781603:web:489a3c71dab5315d592ad6",
}

const app = initializeApp(firebaseConfig)

export const database =
  getDatabase(app)