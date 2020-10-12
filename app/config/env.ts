import Constants from "expo-constants";

const env = {
  dev: {
    apiUrl: "http://localhost:9000/api",
  },
  staging: {
    apiUrl: "http://localhost:9000/api",
  },
  prod: {
    apiUrl: "http://localhost:9000/api",
  },
};

const getCurrentEnv = () => {
  if (__DEV__) return env.dev;
  if (Constants.manifest.releaseChannel === "staging") return env.staging;
  return env.prod;
};

export default getCurrentEnv();
