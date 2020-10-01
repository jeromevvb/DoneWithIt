import React from "react";
import { Text as TextNative, TextProps as TextPropsNative } from "react-native";
import theme from "../config/theme";
import { Colors } from "../config/colors";

interface TextProps {
  children: JSX.Element | string;
  style?: Object;
  color?: Colors;
}

const Text: React.FC<TextProps & TextPropsNative> = ({
  children,
  style,
  color,
  ...restProps
}) => {
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
