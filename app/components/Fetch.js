import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import useApi from "../hooks/useApi";
import Button from "./Button";
import Text from "./Text";

const Fetch = ({ children, apiRequest }) => {
  const { data, error, loading, request } = useApi(apiRequest);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error happened</Text>
        <Button onPress={request} title={"retry"}></Button>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return children(data);
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default Fetch;
