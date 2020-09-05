import React from "react";
import SafeView from "../components/SafeView";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Preview = (props) => {
  return (
    <SafeView>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" size={25} color="white" />
        </View>
        <Image
          resizeMode="contain"
          source={require("../assets/chair.jpg")}
          style={styles.image}
        ></Image>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 30,
    width: 30,
    top: 10,
    right: 10,
    position: "absolute",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Preview;
