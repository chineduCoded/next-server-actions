import { getMessages } from "@/app/actions/message";


export const MessageList = async () => {
    const messages = await getMessages();
    return (
        <ul className="">
            {messages.map((message) => (
                <li key={message.id}>{message.title}: {message.text}</li>
            ))}
        </ul>
    )
}
