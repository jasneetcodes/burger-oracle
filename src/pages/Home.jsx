import InputBar from "../components/InputBar";
import ChatWindow from "../components/ChatWindow";
export default function Home() {

const messages = [
  { role: "user", content: "Hey Oracle, I'm craving a burger." },
  { role: "chat", content: "Certainly! What kind of burger are you in the mood for today?" },

  { role: "user", content: "Something spicy, maybe a good smash burger." },
  { role: "chat", content: "Great choice. Spicy smash burgers are popular right now — let me search Calgary options for you." },

  { role: "chat", content: "Here are a few strong picks:\n• Strathmore Smash – great heat and crispy edges.\n• Cluck N Cleaver – spicy chicken burger with good kick.\n• Regrub – custom spice levels and creative toppings." },

  { role: "user", content: "Nice. Anything close to Kensington?" },
  { role: "chat", content: "Yes! Regrub Kensington is right in the area and well-known for their spicy creations and unique sauces." },

  { role: "user", content: "Perfect, thanks!" },
  { role: "chat", content: "You're welcome! If you want dessert recommendations or sides, just ask." }
]; 
    return (
    <div>
        <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
        </div>
        <div>
            <ChatWindow messages={messages} />
        </div>
        <div className="input-bar-wrapper">
            <InputBar />
        </div>
    </div>
  );
}