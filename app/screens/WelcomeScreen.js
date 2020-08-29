import React from "react";
import SafeView from "../components/SafeView";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = (props) => {
  return (
    <SafeView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={styles.image}
        >
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          ></Image>
          <Text>Sell what you don't need</Text>
        </ImageBackground>

        <View style={styles.buttonLogin}></View>
        <View style={styles.buttonSignup}></View>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {
    width: 50,
    height: 50,
  },

  buttonLogin: {
    height: 70,
    backgroundColor: colors.primary,
  },
  buttonSignup: {
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
