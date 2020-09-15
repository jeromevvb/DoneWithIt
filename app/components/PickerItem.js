import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PickerItem = ({ item, onPress, selected = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.text}>{item.label}</AppText>
        {selected && <MaterialCommunityIcons name="check" size={20} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },
});

export default PickerItem;
