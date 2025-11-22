import { useState } from "react";
import  sendMessageToAPI  from "../services/api";

export default function useChatAPI(){

    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage(message){

        try{
            setIsLoading(true);
            const data = await sendMessageToAPI(message);
            return data;
        } finally {
            setIsLoading(false);
        }
    }

    return {isLoading, sendMessage};
}