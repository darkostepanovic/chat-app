import firebase, {auth, messagesRef} from "../../config/firebase";

const sendMessage = async (formValue: string) => {
    await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userId: auth.currentUser?.uid,
        name: auth.currentUser?.displayName,
        photoURL: auth.currentUser?.photoURL,
        replies: []
    });
};

const replyToMessage = async (msgId: string, reply:string) => {
    const msg = await messagesRef.doc(msgId).get();
    const replies = msg.data()?.replies;
    await messagesRef.doc(msgId).update({
        replies: [
            ...replies,
            {
                text: reply,
                createdAt: new Date(),
                userId: auth.currentUser?.uid,
                name: auth.currentUser?.displayName,
                photoURL: auth.currentUser?.photoURL
            }
        ]
    });
}

const MessageService = {
    sendMessage,
    replyToMessage
};

export default MessageService