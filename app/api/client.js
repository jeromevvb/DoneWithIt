import { create } from "apisauce";
import cache from "../utils/cache";

const client = create({
  baseURL: "http://192.168.1.2:9000/api",
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  // if success
  if (response.ok) {
    // cache data
    cache.store(url, response.data);
    // return object
    return response;
  }

  // if the request got an error
  // we checked if we have cached data
  const cachedData = await cache.get(url);

  // if we have data, we simulate a success request
  if (cachedData) {
    return { ok: true, data: cachedData };
  }

  return response;
};

export default client;
