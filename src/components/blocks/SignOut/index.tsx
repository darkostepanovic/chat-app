import React from "react";

import { auth } from "../../../config/firebase";

import { Button } from "@material-ui/core";

const SignOut = () => {
    // signout service maybe for clearing future store?
    return auth.currentUser && (
        <Button color="secondary" onClick={() => auth.signOut()}>
            Sign Out
        </Button>
    )
};

export default SignOut;