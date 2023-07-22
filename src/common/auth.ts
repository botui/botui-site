import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { firebaseApp } from "./firebase"

const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  const auth = getAuth(firebaseApp)
  try {
    const result = await signInWithPopup(auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    // The signed-in user info.
    const user = result.user
    return Promise.resolve(user)
  } catch (error: any) {
    const errorCode = error.code
    const errorMessage = error.message
    return Promise.reject(errorMessage)
  }
}

export const onAuthChange = (callback: (user: any) => void) => {
  const auth = getAuth(firebaseApp)
  auth.onAuthStateChanged((user) => {
    callback(user)
  })
}
