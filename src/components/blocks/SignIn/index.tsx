import React from "react";
import { Button } from "@material-ui/core";
import AuthService from "../../../services/Auth";

const SignIn = () => {
    const signInWithGoogle = async () => {
        try {
            await AuthService.signIn()
        } catch (e) {
            console.log("Error signing in: ", e.message); // Could use better error handling here
        }
    }

    return (
        <Button variant="contained" color="primary" onClick={signInWithGoogle}>
            Sign in with Google
        </Button>
    )
}

export default SignIn;