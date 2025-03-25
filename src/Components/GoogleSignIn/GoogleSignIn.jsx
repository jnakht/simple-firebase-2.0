import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const GoogleSignIn = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
            setUser(signedInUser);
        })
        .catch(error => {
            console.log("google error: ", error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default GoogleSignIn;