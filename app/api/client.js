import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.1.2:9000/api",
});

export default client;
