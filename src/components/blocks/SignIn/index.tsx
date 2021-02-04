import React from "react";
import { Button } from "@material-ui/core";
import AuthService from "../../../services/Auth";

import Container from "../../elements/Container";

import chattimeImg from '../../../assets/images/chattime.jpg'

const SignIn = () => {
    const signInWithGoogle = async () => {
        try {
            await AuthService.signIn()
        } catch (e) {
            console.log("Error signing in: ", e.message); // Could use better error handling here
        }
    }

    return (
        <Container flex align="center" justify="center" direction="column" style={{ minHeight: '100vh', overflow: 'auto'}}>
            <img src={chattimeImg} alt="chat-time" style={{ width: '50%', marginBottom: '40px' }}/>
            <Button variant="contained" color="primary" onClick={signInWithGoogle}>
                Sign in with Google
            </Button>
        </Container>
    )
}

export default SignIn;