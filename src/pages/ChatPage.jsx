import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";

export function ChatPage(props) {
    const [ messages, setMessages] = useState([]);

    function handleSubmit(message) {
        setMessages([ ...messages, message]);
    }

    const messageComponents = messages.map((message) => {
        return <Message
            key={message.id}
            avatarIndex={message.author.avatarIndex}
            author={message.author.username}
            text={message.text}
        />;
    });

    return (
        <div>
            Chat page
            <div className="message-list">
                {messageComponents}
            </div>
            <MessageForm onSubmit={handleSubmit}
                username={props.username}
                avatarIndex={props.avatarIndex}
            />
        </div>
    );
};
