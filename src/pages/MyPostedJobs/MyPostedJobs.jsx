import { Suspense } from "react";
import PostedJobList from "./PostedJobList";
import useJobsApi from "../../api/useJobsApi";

const MyPostedJobs = () => {
  const { jobsByEmailPromise } = useJobsApi();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">My posted Jobs: </h2>
      <Suspense fallback={"Loading your posted jobs..."}>
        <PostedJobList
          jobsByEmailPromise={jobsByEmailPromise()}
        ></PostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
