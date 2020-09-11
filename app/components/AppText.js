import React from "react";
import { Text } from "react-native";
import theme from "../config/theme";

const AppText = ({ children, style, color }) => {
  const colorStyle = color ? { color: theme.colors[color] } : {};

  return <Text style={[theme.text, colorStyle, style]}>{children}</Text>;
};

AppText.defaultProps = {
  style: {},
};

export default AppText;
