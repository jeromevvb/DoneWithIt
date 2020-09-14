import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

const AppTextInput = ({ icon, error, ...restProps }) => {
  return (
    <View style={styles.input}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={theme.colors.medium}
        style={theme.text}
        {...restProps}
      />
    </View>
  );
};

AppTextInput.defaultProps = {};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
