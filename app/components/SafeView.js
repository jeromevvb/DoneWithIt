import React from "react";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";
import Constants from "expo-constants";

const SafeView = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeView;
