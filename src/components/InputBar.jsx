import { useState } from "react";

export default function InputBar({onSendMessage}) {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSendMessage() {
    const trimmedMessage = message.trim();

    setIsSending(true);
    // function to send Trimmedmessage onSendMessage(trimmedMessage);
    await onSendMessage(trimmedMessage);
    setIsSending(false);
    setMessage("");
  }

  async function handleEnterPress(e) {
    const trimmedMessage = message.trim();
    if (e.key === "Enter" && !isSending) {
      // function to send Trimmedmessage
      setIsSending(true);
      await onSendMessage(trimmedMessage);
      setIsSending(false)
      setMessage("");
    }
  }
  return (
    <div className="input-bar-container">
      <div className="input-bar">
        <input
          type="text"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => handleEnterPress(e)}
        />
        <button
          // function to send message onClick={}
          onClick={handleSendMessage}
          disabled={isSending}
          style={{
            cursor: isSending ? "not-allowed" : "pointer",
            opacity: isSending ? 0.6 : 1,
          }}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
