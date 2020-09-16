import React from "react";
import { View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import theme from "../config/theme";
import AccountNavigator from "./AccountNavigator";
import ListingNavigator from "./ListingNavigator";

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
        options={{
          tabBarButton: () => (
            <View
              style={{
                top: -15,
                backgroundColor: theme.colors.primary,
                borderRadius: 30,
                width: 55,
                height: 55,
                justifyContent: "center",
                alignItems: "center",
                borderColor: theme.colors.white,
                borderWidth: 4,
              }}
            >
              <MaterialCommunityIcons
                size={30}
                name="plus-circle"
                color={theme.colors.white}
              />
            </View>
          ),
        }}
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
