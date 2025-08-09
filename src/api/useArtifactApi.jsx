import React, { useCallback } from "react";
import useAxiosToken from "../hooks/useAxiosToken";

const useArtifactApi = () => {
  const axiosToken = useAxiosToken();

  const myArtifactsPromise = useCallback(
    (email) => {
      return axiosToken
        .get(`/my-artifacts?email=${email}`)
        .then((res) => res.data);
    },
    [axiosToken] 
  );

  return {
    myArtifactsPromise,
  };
};

export default useArtifactApi;