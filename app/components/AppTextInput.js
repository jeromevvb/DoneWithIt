import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

const AppTextInput = ({ icon, ...restProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={theme.text} {...restProps} />
    </View>
  );
};

AppTextInput.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 25,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
