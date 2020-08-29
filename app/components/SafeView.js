import React from "react";
import { StyleSheet, Platform, SafeAreaView, StatusBar } from "react-native";

const SafeView = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeView;
