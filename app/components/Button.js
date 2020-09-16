import React from "react";
import { StyleSheet, Platform, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const Button = (props) => {
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

Button.defaultProps = {};

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
