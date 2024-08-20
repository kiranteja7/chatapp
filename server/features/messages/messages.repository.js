import { Message } from "./messages.schema.js";

export const saveMessage = async (message) => {
  const newMessage = new Message(message);
  return await newMessage.save();
};

export const fetchMessages = async () => {
  return await Message.find().sort({ timestamp: 1 });
};

