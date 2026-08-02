import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth"

import app from "../firebase/config"


const auth = getAuth(app)


function usernameToEmail(username) {
  return `${username}@naglist.local`
}


export async function loginUser(username, password) {

  const email = usernameToEmail(username)

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  )

  return userCredential.user

}