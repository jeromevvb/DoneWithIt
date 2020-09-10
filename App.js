import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
} from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import PreviewScreen from "./app/screens/PreviewScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // return <WelcomeScreen>Login</WelcomeScreen>;
  return <MessagesScreen />;
}

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor: "blue",
//     flex: 1,
//   },
// });
// return (
//   <View
//     style={{
//       backgroundColor: "white",
//       flex: 1,
//       flexDirection: "row-reverse",
//       justifyContent: "center",
//       alignContent: "center",
//       // flexWrap: "wrap",
//       // height: 80
//     }}
//   >
//     <View
//       style={{
//         backgroundColor: "tomato",
//         // width: 100,
//         flex: 1,
//         height: 100,
//       }}
//     />
//     <View
//       style={{
//         backgroundColor: "dodgerblue",
//         top: 20,
//         width: 100,
//         height: 100,
//       }}
//     />
//     <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
//   </View>
// );
