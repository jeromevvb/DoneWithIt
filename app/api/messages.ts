import { MessageRegistration } from "../models/messages";
import client from "./client";

const sendMessage = (data: MessageRegistration) =>
  client.post("/messages", data);

export default {
  sendMessage,
};
