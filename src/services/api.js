
const BASE_URL = "http://localhost:5000/api"; // Backend server URL

export async function sendMesageToAPI(message) {

    const response = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message})
    } );


    if(!response.ok){
        throw new Error("Failed to send message");
    }

    return response.json();
}