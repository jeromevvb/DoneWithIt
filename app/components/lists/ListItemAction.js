import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../../config/colors";

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
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemAction;
