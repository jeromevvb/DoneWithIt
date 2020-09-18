import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import TabsNavigator from "./app/navigation/TabsNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <TabsNavigator />
      </NavigationContainer>
    </>
  );
}

/*

Strategies when the app goes offline

- Notify the user
- Disable some features that require an internet connection
- Cache Data
  - AsyncStorage
  - SecureStore (only use for senstive data)
  - SQLite

  - Caching image using react-native-expo-image-cache
- Store user actions

*/
