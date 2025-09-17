import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({ baseURL: "http://localhost:3000/" });

const useAxiosSecure = () => {
  const { user, signOutUser, setAuthLoading } = useAuth();

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    },
    (error) => {
      console.log(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.status === 401) {
        console.log("Failed for Unauthorized Access 401");
        signOutUser()
          .then(() => console.log("signed out successfully"))
          .catch((error) => console.log(error))
          .finally(() => setAuthLoading(false));
      }
      if (error.status === 403)
        console.log("Do something for forbiden error 403");

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
