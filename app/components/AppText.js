import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, style, color }) => {
  const colorStyle = color ? { color: colors[color] } : {};

  return <Text style={[styles.text, colorStyle, style]}>{children}</Text>;
};

AppText.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
