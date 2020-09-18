import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../config/theme";
import Text from "./Text";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = (props) => {
  const netInfo = useNetInfo();

  if (netInfo === "unknown" || netInfo.isInternetReachable === true)
    return false;

  return (
    <View style={styles.container}>
      <Text color={"white"}>No internet connection</Text>
    </View>
  );
};

OfflineNotice.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OfflineNotice;
