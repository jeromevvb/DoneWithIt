import React from "react";
import { Text as TextNative } from "react-native";
import theme from "../config/theme";

const Text = ({ children, style, color, ...restProps }) => {
  const colorStyle = color ? { color: theme.colors[color] } : {};

  return (
    <TextNative style={[theme.text, colorStyle, style]} {...restProps}>
      {children}
    </TextNative>
  );
};

Text.defaultProps = {
  style: {},
};

export default Text;
