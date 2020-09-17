import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import SafeView from "../components/SafeView";
import * as Progress from "react-native-progress";
import theme from "../config/theme";

const UploadScreen = ({ progress, visible }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar
          progress={progress}
          width={200}
          color={theme.colors.primary}
          borderRadius={25}
        />
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
});

export default UploadScreen;
