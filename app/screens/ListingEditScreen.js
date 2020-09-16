import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SafeView from "../components/SafeView";
import * as Yup from "yup";
import { Form, FormField, SubmitButton, FormPicker } from "../components/forms";
import { PickerIconItem } from "../components/picker";
import FormImagePicker from "../components/forms/FormImagePicker";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  pictures: Yup.array().min(1, "Please select at least one image").ensure(),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category").nullable(),
  description: Yup.string().min(10).label("Description"),
});

const categories = [
  {
    label: "Funiture",
    value: "furniture",
    icon: { name: "floor-lamp", bgColor: "#fc5c65" },
  },
  {
    label: "Clothing",
    value: "clothing",
    icon: { name: "shoe-heel", bgColor: "#2bcbba" },
  },
  {
    label: "Cameras",
    value: "camera",
    icon: { name: "camera", bgColor: "#fed330" },
  },
  { label: "Cars", value: "cars", icon: { name: "car", bgColor: "#fd9644" } },
  {
    label: "Games",
    value: "games",
    icon: { name: "cards", bgColor: "#26de81" },
  },
  {
    label: "Sports",
    value: "sports",
    icon: { name: "basketball", bgColor: "#45aaf2" },
  },
  {
    label: "Movies and music",
    value: "movies",
    icon: { name: "headphones", bgColor: "#4b7bec" },
  },
  {
    label: "Books",
    value: "book",
    icon: { name: "book-open", bgColor: "#9B68E2" },
  },
  {
    label: "other",
    value: "other",
    icon: { name: "application", bgColor: "#7C8CA1" },
  },
];

const ListingEditScreen = (props) => {
  useEffect(() => {
    const requestPermission = async () => {
      const { granted } = Permissions.askAsync(Permissions.LOCATION);

      if (!granted) return;

      // for perfomance reasons, its better to get the last know position
      const {
        coords: { latitude, longitude },
      } = Location.getLastKnownPositionAsync();
    };

    requestPermission();
  }, []);

  return (
    <SafeView padding>
      <Form
        validationSchema={validationSchema}
        initialValues={validationSchema.default()}
        onSubmit={(values) => console.log(values)}
      >
        <FormImagePicker name="pictures" />

        <FormField maxLength={255} name="title" placeholder="Title" />

        <FormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />

        <FormPicker
          name="category"
          placeholder="Category"
          items={categories}
          PickerItemComponent={PickerIconItem}
          numberOfColumns={3}
        />

        <FormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <SubmitButton title="POST" />
      </Form>
    </SafeView>
  );
};

ListingEditScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default ListingEditScreen;
