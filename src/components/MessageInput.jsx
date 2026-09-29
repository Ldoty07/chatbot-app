import { useState } from "react"

import ErrorMsg from "./ErrorMsg";

function MessageInput({ messages, addMessage }) {
    const [msgText, setMsgText] = useState("");
    const [errorMsgText, setErrorMsgText] = useState("");

    function getBotMsg(input) {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("javascript")) {
            return "JavaScript is a scripting language used in web development to make web pages interactive."
        } else if (lowerInput.includes("react")) {
            return "React is a JavaScript library for building user interfaces."
        } else if (lowerInput.includes("html")) {
            return "HTML is used to structure content on a webpage."
        } else if (lowerInput.includes("python")) {
            return "Python is a high-level programming language used in software development."
        } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
            return "Hello! How can I help you?"
        } else {
            return "I'm not sure how to help with that."
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (msgText.trim() === "") {
            setErrorMsgText("Please enter a message.");
            return;
        } else {
            const userMsg = {
            id: Date.now(),
            sender: "user",
            text: msgText,
            };

            const botMsg = {
                id: Date.now(),
                sender: "bot",
                text: getBotMsg(msgText),
            }

            addMessage([...messages, userMsg, botMsg]);
            setMsgText("");
            setErrorMsgText("");
        }
    }

    return (
        <div id="msgInput">
            <ErrorMsg text={errorMsgText} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={msgText}
                    placeholder="Enter a message"
                    size="80"
                    onChange={(event) => setMsgText(event.target.value)}
                />
                <button className="btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default MessageInput
