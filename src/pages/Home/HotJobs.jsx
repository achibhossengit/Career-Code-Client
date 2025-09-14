import { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = () => {
  //   const jobs = use(jobsPromise);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center pb-2 border-b-2">
        Hot Jobs For Today!
      </h2>
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <div className="flex justify-center gap-5 flex-wrap my-5">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HotJobs;
