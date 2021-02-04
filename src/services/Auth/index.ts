import firebase, {auth} from "../../config/firebase";

const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
}

const AuthService = {
    signIn
};

export default AuthService;