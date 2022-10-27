import { Fragment } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        // console.log(response);
    }
    return (
        <Fragment>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
        </Fragment>
    )
}
export default SignIn;