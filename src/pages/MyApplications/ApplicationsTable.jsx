import { use } from "react";
import TableRow from "./TableRow";

const ApplicationsTable = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Compnay</th>
            <th>Job</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {applications.map((application, index) => (
            <TableRow
              key={index}
              application={application}
              index={index}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
