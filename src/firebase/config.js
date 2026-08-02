import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
      apiKey: "AIzaSyAyajsdIDOm3LuuBaADTt0VkMqJqnH9dJA",
  authDomain: "naglist-8ea9a.firebaseapp.com",
  projectId: "naglist-8ea9a",
  storageBucket: "naglist-8ea9a.firebasestorage.app",
  messagingSenderId: "1042124866147",
  appId: "1:1042124866147:web:e9024dd4bba3612b4cae56",
  // paste your Firebase config here
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


export default app