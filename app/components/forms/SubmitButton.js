import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
};

SubmitButton.defaultProps = {};

export default SubmitButton;
