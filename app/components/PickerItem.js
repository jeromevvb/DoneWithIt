import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import theme from "../config/theme";

const PickerItem = ({ label, onPress, selected = false }) => {
  return (
    <TouchableHighlight underlayColor={theme.colors.light} onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.text}>{label}</AppText>
        {selected && <MaterialCommunityIcons name="check" size={20} />}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});

export default PickerItem;
