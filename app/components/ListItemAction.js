import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemAction = ({ action, onPress }) => {
  const bgColor = action === "delete" ? { backgroundColor: colors.danger } : {};
  const iconName = "trash-can";

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, bgColor]}>
        <MaterialCommunityIcons name={iconName} size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

ListItemAction.defaultProps = {
  action: "delete",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemAction;
