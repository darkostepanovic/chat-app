import React from "react";
import { Grow } from "@material-ui/core";

import { IMessage } from "../../../types/IMessage";

import ChatMessage from "../ChatMessage";
import { ReplyWrapper, ReplyAvatar } from "./styled";

const ReplyMessage = (props: { message: IMessage; ownMessage: boolean }) => {
    const { text, name, photoURL } = props.message;
    const { ownMessage } = props;
    return (
        <Grow in={true}>
            <ReplyWrapper ownMessage={ownMessage}>
                <ReplyAvatar src={photoURL} alt="user-avatar"/>
                <ChatMessage.ContentWrapper ownMessage={ownMessage} style={{ marginLeft: 5 }}>
                    <h6 style={{ fontSize: '0.75rem'}}>{name} replied:</h6>
                    <ChatMessage.ContentText variant="outlined">
                        <p style={{fontSize: '0.75rem'}}>{text}</p>
                    </ChatMessage.ContentText>
                </ChatMessage.ContentWrapper>
            </ReplyWrapper>
        </Grow>
    )
}

export default ReplyMessage;