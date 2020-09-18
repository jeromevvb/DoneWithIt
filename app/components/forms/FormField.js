import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

const FormField = ({ name, ...restProps }) => {
  const {
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
  } = useFormikContext();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
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

FormField.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default FormField;
