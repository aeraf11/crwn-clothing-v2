import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
const defaultFormFields = {
      displayName: ''
    , email: ''
    , password: ''
    , confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) { 
            alert("password don't match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }
        catch(error) {
            console.log("User creation encountered error: ", error);
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Display Name" 
                    inputOptions ={ { type:'text', required:true, onChange:handleChange, name:"displayName", value: displayName }}
                />
                
                <FormInput 
                    label="Email" 
                    inputOptions ={ { type:'email', required:true, onChange:handleChange, name:"email", value: email }}
                />

                <FormInput 
                    label="Password" 
                    inputOptions ={ { type:'password', required:true, onChange:handleChange, name:"password", value: password }}
                />

                <FormInput 
                    label="Confirm Password" 
                    inputOptions ={ { type:'password', required:true, onChange:handleChange, name:"confirmPassword", value: confirmPassword }}
                />

                <Button buttonType='inverted' type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm