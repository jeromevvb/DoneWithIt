const { default: client } = require("./client");

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

// -title
// -price
// -categoryId
// -description
// -location
// ‘images’, {  name: ‘unique name’,  type: ‘image/jpeg’, uri: ‘uri of the image on the device’ };

const postListing = async ({ form, location }, onUploadProgress) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("price", form.price);
  data.append("categoryId", form.category.value);
  data.append("description", form.description);

  if (location) {
    data.append("location", JSON.stringify(location));
  }

  form.images.forEach((imageUri, i) => {
    return data.append("images", {
      name: `image-${i}`,
      type: "image/jpeg",
      uri: imageUri,
    });
  });

  return client.post(endpoint, data, {
    onUploadProgress: (progress) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  getListings,
  postListing,
};
