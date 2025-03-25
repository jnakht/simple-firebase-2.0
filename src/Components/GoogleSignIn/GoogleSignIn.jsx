import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";


const GoogleSignIn = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
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