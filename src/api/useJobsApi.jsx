import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const useJobsApi = () => {
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();

  const jobsByEmailPromise = () => {
    return axiosInstance
      .get(`jobs/applications?email=${user.email}`)
      .then((res) => res.data);
  };

  return { jobsByEmailPromise };
};

export default useJobsApi;
