import React, { useRef, useState } from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { messagesRef } from "../../config/firebase";
import { Button, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { IMessage } from "../../types/IMessage";

import MessageService from "../../services/MessageService";

import ChatMessage from "../../components/blocks/ChatMessage";
import SignOut from "../../components/blocks/SignOut";
import ChatForm from "../../components/elements/ChatForm";
import Container from "../../components/elements/Container";
import ControlsSection from "../../components/elements/ControlsSection";
import ChatRoomWrapper from "../../components/elements/ChatRoomWrapper";

const ChatRoom = () => {
    const dummy = useRef<HTMLDivElement>(null);

    const query = messagesRef.orderBy('createdAt').limit(25); // could implement LoadMore btn
    let messages: any;
    [messages] = useCollectionData(query, {idField: 'id'});

    const [ formValue, setFormValue] = useState('');

    const sendMessage = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            await MessageService.sendMessage(formValue);
        } catch (e) {
            console.log("Error sending message: ", e.message); // Could be better error handling
        }
        setFormValue('');
        dummy.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const sendReply = async (id: string, val: string) => {
        try {
            await MessageService.replyToMessage(id, val);
        } catch (e) {
            console.log("Error sending reply: ", e.message); // Could be better error handling
        }

    }

    return (
        <ChatRoomWrapper>
            <Container>
                <h5>General Chat Room</h5>
                <main>
                    { messages && messages.map((msg: IMessage) => <ChatMessage key={msg.id} message={msg} onReply={sendReply}/>) }
                    { (!messages || messages.length === 0) && <p>Be the first to write something cool...</p> }
                    <div ref={dummy}/>
                </main>
            </Container>
            <ControlsSection>
                <Container flex align="center" justify="space-between">
                    <ChatForm onSubmit={sendMessage}>
                        <TextField label="Say something cool..."
                                   value={formValue}
                                   multiline
                                   fullWidth
                                   onChange={e => setFormValue(e.target.value)}
                        />
                        <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>} type="submit">Send</Button>
                    </ChatForm>
                    <SignOut/>
                </Container>
            </ControlsSection>
        </ChatRoomWrapper>
    )
}

export default ChatRoom