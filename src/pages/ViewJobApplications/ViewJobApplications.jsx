import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewJobApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  const handleStatusChange = (e, application_id) => {
    console.log(e.target.value, application_id);

    axios
      .patch(`http://localhost:3000/applications/${application_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Stuatus updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {applications.length} applications recieved for job id: {job_id}
      <table className="table w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>LinkedIn</th>
            <th>GitHub</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app._id}>
              <td>{index + 1}</td>
              <td>{app.applicant}</td>
              <td>{app.title}</td>
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
                <select
                  onChange={(e) => handleStatusChange(e, app._id)}
                  defaultValue={app.status}
                  className="select"
                >
                  <option disabled={true}>Select Staus</option>
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewJobApplications;
