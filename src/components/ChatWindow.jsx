import { useRef, useEffect } from "react"
import MessageBubble from "./MessageBubble"

export default function ChatWindow({messages}){

    const bottomViewRef = useRef(null);

    useEffect(() => {
        bottomViewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    console.log(messages[3]);

    return(
        <div className="chat-window">
            {messages.map((msg, index) => {
                return(<MessageBubble key={index}  role={msg.role} content={msg.content} />);
            })}

            <div ref={bottomViewRef} />
        </div>
    )
}