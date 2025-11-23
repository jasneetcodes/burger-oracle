export default function MessageBubble({ role, content, isTyping = false }) {
  const isUser = role === "user"; // condition to diff between user and chat messages

  return (
    <div
      className="message-container"
      style={{ justifyContent: isUser ? "flex-end" : "flex-start" }}
    >
      <div
        className="message"
        style={{
          background: isUser ? "#d1e7ff" : "#f1f1f1",
          border: isUser ? "1px solid #b5d9ff" : "1px solid #e0e0e0",
        }}
      >
        {!isTyping ? (
          <p>{content}</p>
        ) : (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
}
