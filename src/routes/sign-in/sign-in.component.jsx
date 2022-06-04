// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth"; 
import { 
    signInWithGooglePopup, createUserDocumentFromAuth
    // , auth, signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {
    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     // console.log(response);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
        // createUserDocumentFromAuth(user);
    }
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     // const userDocRef = await createUserDocumentFromAuth(user);
    //     console.log(user);
    //     // createUserDocumentFromAuth(user);
    // }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignUpForm />
        </div>
    )
}

export default SignIn;