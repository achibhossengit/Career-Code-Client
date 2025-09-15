import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import { jobsByEmailPromise } from "../../api/jobsByEmailApi";
import PostedJobList from "./PostedJobList";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">My posted Jobs: </h2>
      <Suspense fallback={'Loading your posted jobs...'}>
        <PostedJobList jobsByEmailPromise={jobsByEmailPromise(user.email)}></PostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
