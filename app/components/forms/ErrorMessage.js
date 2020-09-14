import React from "react";
import AppText from "../AppText";

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return <AppText color="danger">{error}</AppText>;
};

export default ErrorMessage;
