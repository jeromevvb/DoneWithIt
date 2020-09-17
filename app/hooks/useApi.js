import React, { useState, useEffect } from "react";

export default (apiRequest) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async () => {
    setError(false);

    setLoading(true);
    const response = await apiRequest();
    setLoading(false);

    if (!response.ok) return setError(true);

    setData(response.data);
  };

  useEffect(() => {
    request();
  }, []);

  return { data, loading, error, request };
};
