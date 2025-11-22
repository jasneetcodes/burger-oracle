import { useState } from "react";

export default function InputBar() {

    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);


    async function handleSendMessage(){
        const trimmedMessage = message.trim();

        setIsSending(true);
        // function to send Trimmedmessage
        setIsSending(false);
        setMessage("");
    }

    function handleEnterPress(e){
        const trimmedMessage = message.trim();
        if(e.key === "Enter" && !isSending){
            // function to send Trimmedmessage
        }
    }
  return (
    <div>
      <div>
        <input type="text" placeholder="Send a message..." value={message} 
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={(e) => handleEnterPress(e)}
        />
      </div>
      <div>
        <button
       // function to send message onClick={}
       disabled={isSending}
        >Send</button>
      </div>
    </div>
  );
}