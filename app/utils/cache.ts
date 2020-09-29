import AsyncStorage from "@react-native-community/async-storage";

const prefix = "cache";

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);

    if (!value) return null;

    const item = JSON.parse(value);

    //TODO: check if the item is not expired

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
