import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = (props) => {
  const { avatar, title, subtitle } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.contentContainer}>
        <AppText>Title</AppText>
        <AppText style={styles.subtitle}>Subtitle</AppText>
      </View>
    </View>
  );
};

ListItem.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  contentContainer: {
    flexDirection: "column",
  },
});

export default ListItem;
