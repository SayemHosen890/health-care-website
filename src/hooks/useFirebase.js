import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Fire/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [users, setUsers] = useState({})
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUsers(result.user)
            })
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;