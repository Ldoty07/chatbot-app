function Message({ sender, text }) {
    return (
        <div className={`${sender}Msg`}>
            <p className="sender">{sender}</p>
            <p>{text}</p>
        </div>
    )
}

export default Message
