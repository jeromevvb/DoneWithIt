import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import SafeView from "../components/SafeView";
import * as Progress from "react-native-progress";
import theme from "../config/theme";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress, visible, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={theme.colors.primary}
            borderRadius={25}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            loop={false}
            autoPlay
            style={styles.done}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  done: {
    width: 150,
  },
});

export default UploadScreen;
