import client from "./client";

const register = (data) => client.post("/users", data);

export default {
  register,
};
