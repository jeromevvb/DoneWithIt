import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SafeView from "../components/SafeView";
import * as Yup from "yup";
import { Form, FormField, SubmitButton, FormPicker } from "../components/forms";
import { PickerIconItem } from "../components/picker";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  images: Yup.array().min(1, "Please select at least one image").ensure(),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category").nullable(),
  description: Yup.string().min(10).label("Description"),
});

const categories = [
  {
    label: "Funiture",
    value: 1,
    icon: { name: "floor-lamp", bgColor: "#fc5c65" },
  },
  {
    label: "Clothing",
    value: 5,
    icon: { name: "shoe-heel", bgColor: "#2bcbba" },
  },
  {
    label: "Cameras",
    value: 3,
    icon: { name: "camera", bgColor: "#fed330" },
  },
  { label: "Cars", value: 2, icon: { name: "car", bgColor: "#fd9644" } },
  {
    label: "Games",
    value: 4,
    icon: { name: "cards", bgColor: "#26de81" },
  },
  {
    label: "Sports",
    value: 6,
    icon: { name: "basketball", bgColor: "#45aaf2" },
  },
  {
    label: "Movies and music",
    value: 7,
    icon: { name: "headphones", bgColor: "#4b7bec" },
  },
  {
    label: "Books",
    value: 8,
    icon: { name: "book-open", bgColor: "#9B68E2" },
  },
  {
    label: "Other",
    value: 9,
    icon: { name: "application", bgColor: "#7C8CA1" },
  },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (form, formik) => {
    setUploadVisible(true);
    const response = await listingsApi.postListing(
      { form, location },
      (progress) => setUploadProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      return alert("Couldn't add new listing");
    }

    formik.resetForm();

    console.log("Response", response);
  };

  const onDone = () => {
    setUploadVisible(false);
  };

  return (
    <SafeView padding>
      <UploadScreen
        progress={uploadProgress}
        visible={uploadVisible}
        onDone={onDone}
      />
      <Form
        validationSchema={validationSchema}
        initialValues={validationSchema.default()}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />

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
