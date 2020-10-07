import { UserRegistrationType } from "../models/user";
import client from "./client";

const register = (data: UserRegistrationType) => client.post("/users", data);

export default {
  register,
};
