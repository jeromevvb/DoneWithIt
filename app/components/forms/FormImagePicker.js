import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";

import ErrorMessage from "./ErrorMessage";
import ImageListInput from "../ImageListInput";

const FormImagePicker = ({ name, ...restProps }) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();
  const imagesUris = values[name];

  const handleAddImage = (imageUri) => {
    // add image to values
    setFieldValue(name, [...imagesUris, imageUri]);
  };

  const handleRemoveImage = (imageUri) => {
    const hydratedValues = imagesUris.filter((i) => i !== imageUri);
    setFieldValue(name, hydratedValues);
  };

  return (
    <View style={styles.container}>
      <ImageListInput
        imagesUris={imagesUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
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

FormImagePicker.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "column",
  },
  error: {
    marginTop: 5,
  },
});

export default FormImagePicker;
