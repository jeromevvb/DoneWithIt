import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = (props) => {
  const { title, subtitle, image } = props;

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={3} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
};

Card.defaultProps = {};

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "600",
    paddingBottom: 2,
  },
  subtitle: {
    color: colors.secondary,
  },
  content: {
    padding: 15,
  },
});

export default Card;
