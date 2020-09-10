import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const RenderTouchable = ({ onPress, children }) => {
  if (onPress) {
    return (
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        {children}
      </TouchableHighlight>
    );
  }

  return children;
};

const RenderSwipeable = ({ rightActions, children }) => {
  if (rightActions) {
    return <Swipeable renderRightActions={rightActions}>{children}</Swipeable>;
  }

  return children;
};

const ListItem = (props) => {
  const { avatar, title, subtitle, onPress, rightActions } = props;

  return (
    <RenderSwipeable rightActions={rightActions}>
      <RenderTouchable onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={avatar} />
          <View style={styles.contentContainer}>
            <AppText>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </RenderTouchable>
    </RenderSwipeable>
  );
};

ListItem.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
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
