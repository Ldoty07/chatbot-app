import Message from "./Message";

function MsgContainer({ messages }) {
    return (
        <div id="msgContainer">
            { messages.length === 0 ? (
                <p>No messages. Enter a message to get a response!</p>
            ) : (
                messages.map((message) => (
                    <Message 
                        key={message.id}
                        sender={message.sender} 
                        text={message.text}
                    />
                ))
            )}
        </div>
    )
}

export default MsgContainer
