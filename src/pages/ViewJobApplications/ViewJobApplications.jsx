import { useLoaderData, useParams } from "react-router";

const ViewJobApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  return (
    <div>
      {applications.length} applications recieved for job id: {job_id}
      <table className="table w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>LinkedIn</th>
            <th>GitHub</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app._id}>
              <td>{index + 1}</td>
              <td>{app.applicant}</td>
              <td>{app.title}</td>
              <td>{app.company}</td>
              <td>{app.location}</td>
              <td>
                <a
                  href={app.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  LinkedIn
                </a>
              </td>
              <td>
                <a
                  href={app.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  GitHub
                </a>
              </td>
              <td>
                <a
                  href={app.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Resume
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewJobApplications;
