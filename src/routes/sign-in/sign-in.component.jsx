import { Fragment, useEffect } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    useEffect(async () => {
        const response = await getRedirectResult(auth);
        console.log(response);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    }, []);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user});
    // }
    return (
        <Fragment>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button> */}
            <SignUpForm />
        </Fragment>
    )
}
export default SignIn;