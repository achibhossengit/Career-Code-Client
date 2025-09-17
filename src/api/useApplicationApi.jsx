import useAxiosSecure from "../hooks/useAxiosSecure";

const useApplicationApi = () => {
  const axiosInstance = useAxiosSecure();

  const myApplicationsPromise = (email) => {
    return axiosInstance
      .get(`applications?email=${email}`)
      .then((res) => res.data);
  };

  const applicationByJobId = (jobId) => {
    return axiosInstance
      .get(`applications?job_id=${jobId}`)
      .then((res) => res.data);
  };

  return { myApplicationsPromise, applicationByJobId };
};

export default useApplicationApi;
