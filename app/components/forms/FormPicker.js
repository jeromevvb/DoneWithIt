import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ name, items, ...restProps }) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
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

AppFormPicker.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default AppFormPicker;
