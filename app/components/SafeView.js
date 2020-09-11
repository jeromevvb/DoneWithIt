import React from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

const SafeView = ({ children, bgColor, padding = false }) => {
  const innerStyles = [styles.container, { backgroundColor: bgColor }];
  const paddingStyles = padding ? { padding: 20 } : {};

  return (
    <SafeAreaView style={innerStyles}>
      <View style={paddingStyles}>{children}</View>
    </SafeAreaView>
  );
};

SafeView.defaultProps = {
  bgColor: colors.white,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeView;
