import React, { use } from "react";

const PostedJobList = ({ jobsByEmailPromise }) => {
  const jobs = use(jobsByEmailPromise);

  console.log(jobs);
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-5">
      <table className="table table-zebra border">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>category</th>
            <th className="text-end">Applications</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {jobs.map((job, index) => (
            <tr key={index}>
              <th>{index}</th>
              <td>{job.title}</td>
              <td>{job.category}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJobList;
