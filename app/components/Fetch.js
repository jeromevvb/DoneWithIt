import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import useApi from "../hooks/useApi";
import ActivityIndicator from "./ActivityIndicator";
import Button from "./Button";
import Text from "./Text";

const Fetch = ({ children, apiRequest }) => {
  const { data, error, loading, request } = useApi(apiRequest);

  useEffect(() => {
    request();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>An error happened</Text>
        <Button onPress={request} title="retry" />
      </View>
    );
  }

  if (loading) {
    return <ActivityIndicator visible />;
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
