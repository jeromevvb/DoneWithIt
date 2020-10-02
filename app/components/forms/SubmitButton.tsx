import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import Button from "../Button";

const SubmitButton: React.FC<{
  title: string;
  onPress(event: GestureResponderEvent): void;
}> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={() => handleSubmit()} />;
};

export default SubmitButton;
