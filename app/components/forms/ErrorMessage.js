import React from "react";
import Text from "../Text";

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return <Text color="danger">{error}</Text>;
};

export default ErrorMessage;
