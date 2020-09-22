import React, { useState, useEffect } from "react";

export default (apiRequest) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setError(false);

    setLoading(true);
    const response = await apiRequest(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { data, loading, error, request };
};
