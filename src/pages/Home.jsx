import { useState } from "react";
import InputBar from "../components/InputBar";
import ChatWindow from "../components/ChatWindow";
import useChatAPI from "../hooks/useChatAPI";
export default function Home() {

  const [messages, setMessages] = useState([]);
  const {isLoading, sendMessage} = useChatAPI();


  async function handleSendMessage(userInput){
    setMessages(prev => [...prev, {role: "user", content: userInput }]);

    const chatResponse = await sendMessage(userInput)

    setMessages(prev => [...prev, {role: "chat", content: chatResponse}])
  }

const mockMessages = [
  { role: "user", content: "Hey Oracle, I'm craving a burger." },
  { role: "chat", content: "Certainly! What kind of burger are you in the mood for today?" },

  { role: "user", content: "Something spicy, maybe a good smash burger." },
  { role: "chat", content: "Great choice. Spicy smash burgers are popular right now — let me search Calgary options for you." },

  { role: "chat", content: "Here are a few strong picks:\n• Strathmore Smash – great heat and crispy edges.\n• Cluck N Cleaver – spicy chicken burger with good kick.\n• Regrub – custom spice levels and creative toppings." },

  { role: "user", content: "Nice. Anything close to Kensington?" },
  { role: "chat", content: "Yes! Regrub Kensington is right in the area and well-known for their spicy creations and unique sauces." },

  { role: "user", content: "Thanks, any other spot near Kensington?" },
]; 
    return (
    <div>
        <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
        </div>
        <div>
            <ChatWindow messages={mockMessages} isLoading={isLoading} />
        </div>
        <div className="input-bar-wrapper">
            <InputBar onSendMessage={handleSendMessage} />
        </div>
    </div>
  );
}