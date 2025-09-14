import { Suspense } from "react";
import { myApplicationsPromise } from "../../api/applicationsApi";
import useAuth from "../../hooks/useAuth";
import ApplicationsTable from "./ApplicationsTable";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-xl font-bold text-center">
        this is my applications page
      </h2>
      <Suspense fallback={'loading your applications'}>
        <ApplicationsTable
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationsTable>
      </Suspense>
    </div>
  );
};

export default MyApplications;
