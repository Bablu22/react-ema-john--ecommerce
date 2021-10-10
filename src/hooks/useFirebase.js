import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initailizeAuthentication from "../Firebase/Firebase.init";

initailizeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        
        return signInWithPopup(auth, googleProvider)

    
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    return { user, googleSignIn, logOut }

}

export default useFirebase;

