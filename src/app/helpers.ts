import { Message } from "whatsapp-web.js";

export const handleCommand = (listener: (message: Message) => void) => listener;
