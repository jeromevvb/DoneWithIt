import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../Text";
import Icon from "../Icon";

const PickerIconItem = ({ item, onPress, selected = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.content}>
          <Icon name={item.icon.name} bgColor={item.icon.bgColor} size={60} />
          <Text style={styles.text}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 5,
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: "33%",
  },
  content: {
    alignItems: "center",
  },
});

export default PickerIconItem;
