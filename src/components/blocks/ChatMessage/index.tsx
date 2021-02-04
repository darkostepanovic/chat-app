import React, {useState} from "react";
import { auth } from "../../../config/firebase";
import { Avatar, Button, Collapse, Grow, TextField } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { IMessage } from "../../../types/IMessage";

import ReplyMessage from "../ReplyMessage";
import ChatMessageWrapper from "../../elements/ChatMessageWrapper";
import { ContentText, ContentWrapper, ReplyForm, ReplyLink, ReplyLinkWrapper } from "./styled";

const ChatMessage = (props: {onReply: (id: string, value: string) => void; message: IMessage; }) => {
    const { id, text, name, userId, photoURL, replies } = props.message;
    const { onReply } = props;
    const ownMessage = userId === auth.currentUser?.uid;

    const [open, setOpen] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [replyValue, setReplyValue] = useState('');

    const toggleReplyForm = () => {
        setOpen(!open);
    }

    const handleSendReply = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onReply(id, replyValue);
        setReplyValue('');
        setOpen(false);
        setShowReplies(true);
    }

    const toggleShowReplies = () => {
        setShowReplies(!showReplies);
    }

    return (
        <Grow in={true}>
            <ChatMessageWrapper ownMessage={ownMessage}>
                <Avatar src={photoURL} alt="user-avatar"/>
                <ContentWrapper ownMessage={ownMessage}>
                    <h6>{name}</h6>
                    <ContentText variant="outlined">
                        <p>{text}</p>
                    </ContentText>
                    <ReplyLinkWrapper>
                        { replies && replies.length > 0 ?
                            <ReplyLink onClick={toggleShowReplies}>{showReplies ? 'Hide' : 'Show replies'}</ReplyLink> :
                            <div/>
                        }
                        <ReplyLink onClick={toggleReplyForm}>{open ? 'Hide' : 'Send Reply'}</ReplyLink>
                    </ReplyLinkWrapper>
                </ContentWrapper>

                {replies && (
                    <Collapse in={showReplies} collapsedHeight={0}>
                        {replies?.map((r, i) => <ReplyMessage key={i} ownMessage={ownMessage} message={r}/>)}
                    </Collapse>
                )}
                {open && (
                    <ReplyForm onSubmit={handleSendReply}>
                        <TextField label="Reply..."
                                   value={replyValue}
                                   multiline
                                   fullWidth
                                   onChange={e => setReplyValue(e.target.value)}
                        />
                        <Button variant="contained"
                                size="small"
                                color="primary"
                                endIcon={<Icon>send</Icon>}
                                type="submit">
                            Reply
                        </Button>
                    </ReplyForm>
                )}
            </ChatMessageWrapper>
        </Grow>
    )
}

ChatMessage.ChatMessageWrapper = ChatMessageWrapper;
ChatMessage.ContentWrapper = ContentWrapper;
ChatMessage.ContentText = ContentText;

export default ChatMessage;