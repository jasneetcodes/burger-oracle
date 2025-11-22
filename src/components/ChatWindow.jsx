import MessageBubble from "./MessageBubble"

export default function ChatWindow(){

    return(
        <>
        <MessageBubble role={'user'} content={"This is an example user message"} />

        <MessageBubble role={'bot'} content={"This is an example bot message"} />
        </>
    )
}