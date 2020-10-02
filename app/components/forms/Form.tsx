import React from "react";
import { Formik, FormikConfig, FormikValues } from "formik";

const AppForm: React.FC<FormikConfig<FormikValues>> = ({
  validationSchema,
  initialValues,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {() => children}
    </Formik>
  );
};

export default AppForm;
