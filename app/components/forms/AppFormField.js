import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...restProps }) => {
  const { handleChange, handleBlur, touched, errors } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...restProps}
      />
      {touched[name] && (
        <View style={styles.error}>
          <ErrorMessage error={errors[name]} />
        </View>
      )}
    </View>
  );
};

AppFormField.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default AppFormField;
