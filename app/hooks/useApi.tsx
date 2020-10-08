import { ApiResponse } from "apisauce";
import React, { useState } from "react";

const useApi = (apiRequest: (...args: any[]) => Promise<ApiResponse<any>>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args: any[]) => {
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

export default useApi;
