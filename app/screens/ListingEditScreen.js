import React from "react";
import { View, StyleSheet } from "react-native";
import SafeView from "../components/SafeView";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category").nullable(),
  description: Yup.string().min(10).label("Description"),
});

const categories = [
  { label: "Funiture", value: "furniture" },
  { label: "Clothing", value: "clothing" },
  { label: "Cameras", value: "camera" },
];

const ListingEditScreen = (props) => {
  return (
    <SafeView padding>
      <AppForm
        validationSchema={validationSchema}
        initialValues={validationSchema.default()}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />

        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
        />

        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </SafeView>
  );
};

ListingEditScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default ListingEditScreen;
