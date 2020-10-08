import * as Yup from "yup";

export const ListingEditSchema = Yup.object()
  .shape({
    title: Yup.string().required().min(1).label("Title"),
    images: Yup.array()
      .min(1, "Please select at least one image")
      .required()
      .ensure(),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().label("Category").nullable(),
    description: Yup.string().min(10).label("Description"),
  })
  .required();

export type ListingEditType = Yup.InferType<typeof ListingEditSchema>;

// export const LoginCredentialsSchema = yup
//     .object()
//     .shape({
//         email: yup.string().email().ensure().required(),
//         password: yup.string().min(3).ensure().required(),
//     })
//     .required();
// export type LoginCredentials = yup.InferType<typeof LoginCredentialsSchema>;
