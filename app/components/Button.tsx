import React from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import colors, { Colors } from "../config/colors";

interface ButtonProps {
  title: string;
  color?: Colors;
  onPress(event: GestureResponderEvent): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, onPress, color = "primary" } = props;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    width: "100%",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Button;
