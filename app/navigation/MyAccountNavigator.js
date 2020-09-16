import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const MyAccountNavigator = () => (
  <Stack.Navigator initialRouteName="MyAccount">
    <Stack.Screen name="MyAccount" component={MyAccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default MyAccountNavigator;
