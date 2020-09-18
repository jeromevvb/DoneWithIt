import React from "react";
import { Image } from "react-native-expo-image-cache";

const CachedImage = ({ source, preview, ...restProps }) => {
  return (
    <Image
      uri={source}
      preview={{ uri: preview }}
      tint="light"
      {...restProps}
    />
  );
};

export default CachedImage;
