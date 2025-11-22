import InputBar from "../components/InputBar";
import ChatWindow from "../components/ChatWindow";
export default function Home() {
  
  
  
    return (
    <div>
        <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
        </div>
        <div>
            <ChatWindow />
        </div>
        <div className="input-bar-wrapper">
            <InputBar />
        </div>
    </div>
  );
}