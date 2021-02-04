import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";
import { ThemeProvider } from "styled-components";

import ChatRoom from "./containers/ChatRoom";
import SignIn from "./components/blocks/SignIn";
import GlobalStyle from "./components/elements/GlobalStyles";

import { theme } from "./theme";

function App() {
    const [ user ] = useAuthState(auth)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <section>
                { user ? <ChatRoom/> : <SignIn/>}
            </section>
        </ThemeProvider>
    );
}

export default App;
