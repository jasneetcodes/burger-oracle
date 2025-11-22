
export default function MessageBubble({role, content}){

    const isUser = role === "user"; // condition to diff between user and chat messages

    return(
        <div className="message-container" style={{justifyContent: isUser ? "flex-end" : "flex-start"}}>
            <div className="message" style={{
                background: isUser ? "#d1e7ff" : "#f1f1f1",
                border: isUser ? "1px solid #b5d9ff" : "1px solid #e0e0e0"
            }}>
                <p>{content}</p>
            </div>
        </div>
    )
}