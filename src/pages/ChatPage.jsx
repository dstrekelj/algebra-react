import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage(props) {
    const [ formState, setFormState ] = useState('');
    const [ messages, setMessages] = useState([]);

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        setMessages([ ...messages, {
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        }]);
    }

    console.log(formState);

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
            <form onSubmit={handleSubmit}>
                <InputFormField label="Message"
                    type="text"
                    value={formState}
                    onChange={handleChange}
                />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};
