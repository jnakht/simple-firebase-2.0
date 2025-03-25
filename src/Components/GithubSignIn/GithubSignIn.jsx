import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { GithubAuthProvider } from "firebase/auth";

const GithubSignIn = () => {
    const auth = getAuth(app);
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const signedInUser = result.user;
            console.log(signedInUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <button onClick={handleGithubSignIn}>Sign In WIth Github</button>
        </div>
    );
};

export default GithubSignIn;