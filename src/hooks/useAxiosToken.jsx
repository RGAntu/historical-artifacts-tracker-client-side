import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://historical-artifacts-tracker-server-six.vercel.app",
});

const useAxiosToken = () => {
  const { user, logOut } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        
      }
      return config;
    });

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logOut()
          .then(() => {
            console.log("Logged out user due to 401 Unauthorized")
          })
          .catch( err => {
            console.log(err)
          });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup  
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user?.accessToken, logOut]);

  return axiosInstance;
};

export default useAxiosToken;
