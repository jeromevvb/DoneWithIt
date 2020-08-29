import React from "react";
import SafeView from "../components/SafeView";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

const Preview = (props) => {
  return (
    <SafeView>
      <View style={styles.container}>
        <Image
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
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center",
  },
  image: {
    height: 300,
  },
  imageContainer: {
    flex: 1,
  },
  buttonLogin: {
    height: 50,
    backgroundColor: "tomato",
  },
  buttonSignup: {
    height: 50,
    backgroundColor: "lightgreen",
  },
});

export default Preview;
