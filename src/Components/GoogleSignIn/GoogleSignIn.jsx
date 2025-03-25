import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";


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
    const handleSignOutButton = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error);
            
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button onClick={handleSignOutButton}>Sign Out</button>
            {
                user && <div style={{border: '2px solid purple'}}>
                    <h3>UserName: {user.displayName}</h3>
                    <p>User Email: {user.email}</p>
                    <img style={{border: '2px solid aqua', height: '200px', width: '200px'}} src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default GoogleSignIn;