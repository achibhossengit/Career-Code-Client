import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsByEmailPromise }) => {
  const jobs = use(jobsByEmailPromise);
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-5">
      <table className="table table-zebra border">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Deadline</th>
            <th className="text-end">Applications</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>
                <Link
                  to={`/job-applications/${job._id}`}
                  className="text-blue-500 underline"
                >
                  Applications
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJobList;
