import React from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import theme from "../config/theme";
import AccountNavigator from "./AccountNavigator";
import ListingNavigator from "./ListingNavigator";
import NewListingButton from "./NewListingButton";
import { TransitionPresets } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Listing"
        component={ListingNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          ...TransitionPresets.ModalTransition,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} name="account" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
