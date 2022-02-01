import { useState } from "react"
import { messageArrayObject } from "../types/hookType"

export const useMessageStore = () => {
    const [messages, setMessages] = useState<messageArrayObject>([])

    return [messages, setMessages];
}