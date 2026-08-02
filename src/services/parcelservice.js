import { getFirestore, collection, addDoc } from "firebase/firestore"
import app from "../firebase/config"

const db = getFirestore(app)


export async function saveParcelEntry(entry) {

  try {

    const docRef = await addDoc(
      collection(db, "parcelEntries"),
      entry
    )

    console.log("Saved with ID:", docRef.id)

  } catch (error) {

    console.error("Save failed:", error)

  }

}