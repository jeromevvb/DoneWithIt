import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

SubmitButton.defaultProps = {};

export default SubmitButton;
