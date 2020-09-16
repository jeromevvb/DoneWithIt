import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const MyAccountNavigator = () => (
  <Stack.Navigator initialRouteName="MyAccount">
    <Stack.Screen name="MyAccount" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default MyAccountNavigator;
