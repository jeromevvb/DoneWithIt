import React from "react";
import SafeView from "../components/SafeView";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";
import Button from "../components/Button";

const WelcomeScreen = (props) => {
  return (
    <SafeView>
      <ImageBackground
        blurRadius={3}
        source={require("../assets/background.jpg")}
        style={styles.imageContainer}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagLine}>Sell what you don't need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Login" color="primary" />
          <Button title="Sign Up" color="secondary" />
        </View>
      </ImageBackground>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  imageContainer: {
    resizeMode: "cover",
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  tagLine: {
    fontWeight: "600",
    paddingVertical: 20,
    fontSize: 25,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default WelcomeScreen;
