import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator initialRouteName="Listing">
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ ...TransitionPresets.ModalTransition }}
    />
  </Stack.Navigator>
);

export default ListingNavigator;
